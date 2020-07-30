const express = require('express');
const { join } = require('path');
const { exists } = require('fs');
const { spawn, exec } = require('child_process');

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

const indexFile = join(`${__dirname}/templates/index.html`);
const reportFile = join(`${__dirname}/reports/index.html`);

app.get('/', (req, res) => {
  res.status(200).sendFile(indexFile);
});

function returnHttpError(res, message) {
  return res.status(400).json({
    ok: false,
    message
  });
}

function handleStdout(res, data) {
  const stdoutErrPattern = /^Error: .*/gm;

  if (stdoutErrPattern.test(data)) {
    return res.status(400).json({
      ok: false,
      message: data.match(stdoutErrPattern),
    });
  }
  
  console.log(data);
}

function exitHandler(res, retCode) {
  if (!res.headersSent) {
    return res.status(!retCode ? 200 : 400).json({
      ok: retCode === 0
    });
  }
}

app.post('/test', (req, res) => {
  const testProc = spawn('yarn', ['launch']);

  testProc.stdout.on('data', data => handleStdout(res, data.toString()));
  testProc.stderr.on('data', data => returnHttpError(res, data));
  testProc.on('error', err => returnHttpError(res, err.message));
  testProc.on('exit', (code, signal) => exitHandler(res, code));
});

app.post('/report', (req, res) => {
  const reportProc = spawn('yarn', ['report']);

  reportProc.stdout.on('data', data => handleStdout(res, data.toString()));
  reportProc.stderr.on('data', data => returnHttpError(res, data));
  reportProc.on('error', err => returnHttpError(res, err.message));
  reportProc.on('exit', (code, signal) => exitHandler(res, code));
});

app.get('/report', (req, res) => {
  exists(reportFile, ok => {
    return ok
      ? res.status(200).sendFile(reportFile)
      : res.status(400).json({ message: 'é necessário gerar o relatório primeiro.' });
  });
});

app.listen(PORT, HOST, () => console.log('server running.'));
