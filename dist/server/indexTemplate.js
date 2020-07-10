export const indexTemplate = content => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Reddit</title>
  <script src="/static/index.js"></script>
</head>
<body>
  <div id="react_root">${content}</div>
</body>
</html>`;