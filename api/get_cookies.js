module.exports = (req, res) => {
  res.setHeader("Set-Cookie", [
    "C1__SameSiteNotSet_And_Secure=__value__; Max-Age=86400; Path=/; Secure",
    "C2__SameSiteNone_And_Secure=__value__; Max-Age=86400; Path=/; Secure; SameSite=None",
    "C3__SameSiteNone_And_NoSecure=__value__; Max-Age=86400; Path=/; SameSite=None",
    "C4__SameSiteNotSet_And_NoSecure=__value__; Max-Age=86400; Path=/;",
  ]);
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  res.send("success");
};
