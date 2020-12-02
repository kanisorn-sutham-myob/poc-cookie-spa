module.exports = (req, res) => {
  res.setHeader("Set-Cookie", [
    "C4__SameSiteNotSet_And_NoSecure=__value__; Max-Age=86400; Path=/; Secure; SameSite=None",
  ]);
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  res.send("success");
};
