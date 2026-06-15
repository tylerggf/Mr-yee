app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "biology_test.html"));
});
