import Link from 'next/link'

export const metadata = { title: 'Overview' }

export default function Overview() {
  return (
    <div className="narrow page prose">
      <div className="eyebrow">About</div>
      <h1>Overview</h1>
      <p className="lede">
        Bahamut XI recreates FINAL FANTASY XI as it was in late 2007: the Level 75 cap, Treasures of Aht Urhgan, and an
        adventure that is best shared with other people.
      </p>

      <h2>The era</h2>
      <ul>
        <li><strong>Content:</strong> the original game, Rise of the Zilart, Chains of Promathia and Treasures of Aht Urhgan.</li>
        <li><strong>Level cap:</strong> 50 at first, raised to 75 through Maat&apos;s Limit Break quests.</li>
        <li><strong>Not here:</strong> Wings of the Goddess and later content, Abyssea, Trusts, Records of Eminence, Field and Grounds of Valor manuals, home point teleports, Mog Garden.</li>
        <li><strong>Rates:</strong> retail experience, skill-up and drop rates.</li>
      </ul>

      <h2>Era-accurate client</h2>
      <p>
        Era-accurate game data (DATs) ships with the launcher: shop lists, prices, menus and dialogue match 2007, not the
        modern retail client. They load through XIPivot, so your game files stay untouched and optional HD packs can sit on top.
      </p>

      <h2>Built on open source</h2>
      <p>
        The server runs <a href="https://github.com/LandSandBoat/server">LandSandBoat</a> through the{' '}
        <a href="https://github.com/phoenixffxi/Phoenix">Phoenix</a> fork and its era modules, with{' '}
        <a href="https://github.com/phoenixffxi/Era-DATs">Era-DATs</a> on the client. Thank you to everyone who works on them.
      </p>

      <h2>Community first</h2>
      <p>
        The point of a 75-era server is people: parties, linkshells, and the long road to Limit Break. Please read the{' '}
        <Link href="/rules">rules</Link> so it stays a place everyone wants to be.
      </p>
    </div>
  )
}
