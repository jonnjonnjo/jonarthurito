export const commands: Record<string, string> = {
  help: `
    <div class="space-y-1 text-kanagawa-fg">
      <p class="text-kanagawa-yellow mb-2">Available commands:</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">about</span>      — who I am</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">experience</span> — work experience</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">education</span>  — educational background</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">skills</span>     — technical skills</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">orgs</span>       — organizations</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">competitions</span>— competition achievements</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">contact</span>    — get in touch</p>
      <p><span class="text-kanagawa-cyan w-24 inline-block">clear</span>      — clear the terminal</p>
    </div>
  `,

  about: `
  <div class="space-y-2">
      <p class="text-kanagawa-violet font-bold">Jonathan Arthurito Aldi Sinaga</p>
      <p class="text-kanagawa-fg">Final year Information System & Technology student at ITB.</p>
      <p class="text-kanagawa-fg">Passionate about competitive programming and backend development.</p>
      <p class="text-kanagawa-fg">GNU/Linux daily driver. Analytical mind forged through years of competitive programming.</p>
    </div>
  `,

  experience: `
    <div class="space-y-3">
      <div>
        <p class="text-kanagawa-yellow">Intellix Global Crossing <span class="text-kanagawa-comment">— Backend Developer Intern</span></p>
        <p class="text-kanagawa-fgDim text-xs mb-1">06/2024 – 08/2024 · Bandung, West Java</p>
        <p class="text-kanagawa-fg">→ Built API to emulate Facebook interactions (read messages, send posts) in Java</p>
        <p class="text-kanagawa-fg">→ Converted Telegram interaction API (send files, read messages) in Java</p>
        <p class="text-kanagawa-fg">→ Ported tdlib library to Windows OS with Java bindings</p>
      </div>
    </div>
  `,

  education: `
    <div class="space-y-1">
      <p class="text-kanagawa-yellow">Institut Teknologi Bandung</p>
      <p class="text-kanagawa-fg">Information System and Technology</p>
      <p class="text-kanagawa-fgDim text-xs">07/2021 – 04/2026 · GPA: 3.52</p>
    </div>
  `,

  skills: `
    <div class="space-y-2">
      <p class="text-kanagawa-yellow mb-1">Technical Skills:</p>
      <div class="grid grid-cols-2 gap-1">
        <p><span class="text-kanagawa-cyan">Languages</span>  — C, C++, Java, Python, Golang, TypeScript</p>
        <p><span class="text-kanagawa-cyan">Databases</span>  — MySQL, PostgreSQL, MongoDB</p>
        <p><span class="text-kanagawa-cyan">OS</span>         — Linux (daily driver)</p>
      </div>
    </div>
  `,

  orgs: `
    <div class="space-y-3">
      <div>
        <p class="text-kanagawa-yellow">KAT & OSKM ITB Website Staff <span class="text-kanagawa-comment">— Backend Developer</span></p>
        <p class="text-kanagawa-fgDim text-xs">06/2024 – 09/2025</p>
        <p class="text-kanagawa-fg">→ Built backend features in TypeScript, collaborated via Linear</p>
      </div>
      <div>
        <p class="text-kanagawa-yellow">Arkavidia 9.0 Website Staff <span class="text-kanagawa-comment">— Backend Developer</span></p>
        <p class="text-kanagawa-fgDim text-xs">11/2024 – 02/2025</p>
        <p class="text-kanagawa-fg">→ Built backend features in TypeScript, collaborated via Linear</p>
      </div>
      <div>
        <p class="text-kanagawa-yellow">Arkavidia 8.0 CP Staff <span class="text-kanagawa-comment">— Problem Setter & Writer</span></p>
        <p class="text-kanagawa-fgDim text-xs">08/2022 – 03/2023</p>
        <p class="text-kanagawa-fg">→ Created problem statements in LaTeX, assisted onsite finals</p>
      </div>
      <div>
        <p class="text-kanagawa-yellow">HMIF Competition Staff <span class="text-kanagawa-comment">— Competitive Programming</span></p>
        <p class="text-kanagawa-fgDim text-xs">08/2022 – 03/2024</p>
        <p class="text-kanagawa-fg">→ Taught CP to 20+ people, prepared problems for PraGemastik XVII</p>
      </div>
    </div>
  `,

  competitions: `
    <div class="space-y-1">
      <p class="text-kanagawa-yellow mb-2">Competition Achievements:</p>
      <p><span class="text-kanagawa-green">★</span> Finalist — ACM-ICPC Asia Jakarta Regional 2023 & 2024</p>
      <p><span class="text-kanagawa-green">★</span> 12th Place — INC Indonesia National Contest 2023</p>
      <p><span class="text-kanagawa-green">★</span> 8th Place — INC Indonesia National Contest 2024</p>
      <p><span class="text-kanagawa-green">★</span> 5th Place — Schematics Competitive Programming 2024</p>
      <p><span class="text-kanagawa-green">★</span> 10th Place — JPC Joints UGM Finals 2023</p>
      <p><span class="text-kanagawa-green">★</span> 63rd Place — IEEExtreme 17.0 2023</p>
      <p><span class="text-kanagawa-green">★</span> Finalist — Gemastik XVI Programming Contest 2023</p>
      <p><span class="text-kanagawa-green">★</span> SCPC Finalist — Compfest 14, 15, 16</p>
      <p><span class="text-kanagawa-green">★</span> Finalist — FindIT 2024 Competitive Programming</p>
    </div>
  `,

  contact: `
    <div class="space-y-1">
      <p class="text-kanagawa-yellow mb-2">Get in touch:</p>
      <p><span class="text-kanagawa-cyan">email</span>    — <a href="mailto:jonathansinaga6464@gmail.com" class="text-kanagawa-blue hover:text-kanagawa-cyan underline">jonathansinaga6464@gmail.com</a></p>
      <p><span class="text-kanagawa-cyan">github</span>   — <a href="https://github.com" target="_blank" class="text-kanagawa-blue hover:text-kanagawa-cyan underline">github.com/jonathan</a></p>
      <p><span class="text-kanagawa-cyan">linkedin</span> — <a href="https://linkedin.com" target="_blank" class="text-kanagawa-blue hover:text-kanagawa-cyan underline">linkedin.com/in/jonathan</a></p>
    </div>
  `,
};
