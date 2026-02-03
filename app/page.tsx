import fs from "fs";
import path from "path";

export default function Page() {
  const htmlPath = path.join(process.cwd(), "public", "index.html");
  let html = fs.readFileSync(htmlPath, "utf8");

  const bodyContentMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);

  if (bodyContentMatch && bodyContentMatch[1]) {
    html = bodyContentMatch[1];
  } else {
  }
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}