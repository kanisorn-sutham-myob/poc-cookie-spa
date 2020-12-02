module.exports = (req, res) => {
  res.setHeader("Set-Cookie", [
    "C4__SameSiteNotSet_And_NoSecure=__value__; Max-Age=86400; Path=/; Secure; SameSite=None",
  ]);
  res.send("success");
};
