function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-950 py-6 text-center text-slate-400">
      <p>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;