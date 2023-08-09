import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Rto&Tron" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Rto&Tron" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

export default router;
