# Wedding website vision

A questionnaire for Wesley and Sela. Use it as a conversation guide, not a form they have to fill out in one sitting. Starred questions (`*`) are the ones that actually unblock building.

Stack constraint to keep in mind while they answer: this is a **static site**. No login, no database, no admin panel. RSVPs and other “submit something” flows will go through a form service, a spreadsheet, or email — not a custom backend.

---

## How to use this

1. Start with **vibe and non-negotiables**. Those lock the look and the scope.
2. Walk the **section checklist**. Most couples pick 5–8 pages, not all of them.
3. Get **copy and assets** only for the sections they actually want.
4. Leave RSVP, registry, and travel until you have dates and venues locked. Those change.

If a call runs long, stop after vibe + which sections exist. Everything else can come later over texts and photos.

---

## 1. The basics *

- Full names as they should appear on the site? Any nicknames, middle names, or a shared last name you want to use?
- Wedding date and (if known) start time?
- City / region? Ceremony and reception at the same place, or two venues?
- Is this a wedding weekend, a single day, or destination?
- Working title for the site / URL preference? (`wesleyandsela.com`, `selaandwesley.com`, something else?)
- Who is the “client”? Both of you, one of you, or a parent who’s paying / has opinions?
- Hard deadline for a first version people can share? Save-the-date date vs. invitation date vs. “whenever”?

---

## 2. What is this site *for*? *

Wedding websites fail when they try to be everything. Pick a primary job:

- **Logistics hub** — where, when, stay, eat, RSVP. Pretty but practical.
- **Invitation companion** — the paper invite is the moment; the site holds the details that don’t fit on a card.
- **Story / mood** — photos, how you met, the aesthetic. Details are secondary.
- **Family diplomacy** — two families, two cities, lots of “who is this person” context.

Follow-ups:

- Who is the audience? Close family, 150 mixed guests, destination guests who’ve never been to this city?
- What should someone be able to do in 30 seconds on their phone?
- What should *not* be on the internet? (home address, registry passwords, unannounced engagement photos, kids’ full names, etc.)
- Should search engines be able to find it, or should it stay link-only / lightly gated?

---

## 3. Vibe and design *

Show 3–5 reference sites or screenshots if you can. The Knot / Zola templates, friends’ sites, Pinterest, even a restaurant or hotel site that *feels* right.

- Three words for the feeling. (Examples: garden, city, desert, coastal, formal, weird, catholic, backyard, art-deco, camp, minimal, maximal.)
- More editorial magazine, or more stationery / invitation?
- Color instincts: cream and sage? black and gold? full color photos and almost no palette?
- Type: serif and romantic, or clean sans-serif?
- Dark and moody vs. light and airy?
- Illustration / pattern / monogram, or photography does all the work?
- Any “please never”: script fonts, hearts, mason jars, countdown timers, sparkles, stock photos of rings, etc.
- Existing paper suite (save the date, invite) we should match? If yes, send photos or the designer files.
- Favorite photos of the two of you — the ones you’d actually hang. We’ll need a hero and a few supporting shots.

### Tone of voice

- Who is writing the words — you two, Joel, or a mix?
- Funny, formal, short and dry, or a little speech-y?
- First person plural (“we”), or a narrator (“Wesley and Sela”)?
- Any inside jokes that are fair game for guests? Any that are not?

---

## 4. Common sections — pick what you actually want

Most good wedding sites are a short stack of these. Check yes / maybe / no. Notes in italics are the usual tradeoffs.

### Almost always worth it

| Section | Want it? | What we need from you |
| --- | --- | --- |
| **Home / hero** | | Names, date, one great photo, maybe a one-line welcome |
| **Schedule** | | Ceremony, cocktail hour, reception, after-party; times; which are invite-only |
| **Venue(s)** | | Names, addresses, map links, parking, what to expect when you arrive |
| **Travel & stay** | | Airport, hotels with blocks, booking codes, cutoff dates, Airbnbs, parking, rideshares |
| **RSVP** | | See section 5. This is the one that has real product decisions |
| **FAQ** | | Kids? Dress code? Plus-ones? Gifts? Photos during the ceremony? |

### Very common

| Section | Want it? | Notes |
| --- | --- | --- |
| **Our story** | | Cute if you have it; skip if writing it sounds painful. 3–6 short beats beat a novel |
| **Wedding party** | | Names, relation, optional one-liner and photo. Gets outdated; keep it light |
| **Registry** | | Link out to Zola / Amazon / Target / Honeyfund or a honeymoon fund. Don’t host product grids ourselves |
| **Dress code** | | Black tie, cocktail, garden formal, “look nice.” Photos of the palette help more than words |
| **Things to do** | | 5–8 local recs for out-of-towners: breakfast, a walk, a bar, one “if you have a car” |
| **Photos** | | Engagement set now; a gallery later. Hosting lots of full-res images is the main perf concern |

### Sometimes worth it

| Section | Want it? | Notes |
| --- | --- | --- |
| **Weekend itinerary** | | Welcome drinks, rehearsal dinner, Sunday brunch. Who’s invited to which |
| **Getting ready / shuttle** | | Pickup times and stops. High-value if parking is a nightmare |
| **Livestream** | | Link + time zone. Goes live that morning; don’t overbuild |
| **Q&A / “ask us”** | | Usually just an email / phone. A public comment wall is a bad idea |
| **Playlist / song requests** | | Fun; a Google Form is enough |
| **Countdown** | | Polarizing. Easy to add, easy to skip |
| **Password gate** | | See hosting notes. Real protection needs the CDN, not a JS prompt |
| **In loving memory** | | Only if you want it. Keep it a quiet line, not a section |
| **COVID / health** | | Rare now; include only if you have an actual policy |

### Usually skip on a custom site

- Seating charts (change until the last night)
- Full guest list / “find your table”
- Live chat
- Individual login per guest
- Blog / planning diary
- Store / ticket sales
- Virtual guestbook that requires moderation (a physical one at the reception is less work)

---

## 5. RSVP — the only real product decision *

A static site cannot store “yes, chicken, plus one.” Pick a lane:

**A. Link out to a form (recommended default)**
Google Form, Tally, Fillout, or Zola/The Knot RSVP. We style a nice “RSVP” page that explains the deadline and then send people to the form. You get a spreadsheet. Zero backend.

**B. Form backend as a service**
Formspree, Basin, Getform, or similar. We can design the RSVP UI on-site; submissions land in email / a dashboard. Still no server of ours. Small yearly cost.

**C. “Email us / text us”**
Fine for a tiny wedding. Gets messy above ~40 people.

**D. Full wedding platform**
Zola / WithJoy / The Knot for RSVP + registry, our site for everything pretty. Honest hybrid. Guests live in two places.

**E. Custom backend on AWS**
API Gateway + Lambda + a table + email. Only worth it if you want meal choices, household RSVP, and a private admin view, *and* you enjoy owning that. Not needed for v1.

Questions to ask them:

- Do you already have a platform (Zola, WithJoy, Paperless Post) you like?
- Do you need **household RSVP** (one person answers for a family) or is per-guest fine?
- Meal choice? Dietary restrictions? Song requests? Shuttle seat? All of those are extra form fields.
- Plus-one rules: named plus-ones only, or “and guest”?
- Kids: none, ceremony only, all ages, or a specific cutoff?
- RSVP deadline?
- Who is watching the inbox / spreadsheet as replies come in?
- Do you want a “change my RSVP” path, or is a follow-up text enough?

---

## 6. People, families, politics

Ask these privately; don’t put the awkward answers on the site.

- How do you want parents / families listed? Both sets? Step-parents? “Together with their families”?
- Anyone who must be named, and anyone who must not?
- Wedding party: who, photos or no photos, order?
- Officiant name on the site?
- Cultural or religious elements guests should know about (ceremony length, covering shoulders, receiving line, etc.)?
- Two last names, a name change, or neither — and when does that go live?

---

## 7. Day-of logistics (the FAQ goldmine)

Guests will ask these whether or not you write them down.

- Dress code, including shoes (grass, gravel, dance floor).
- Indoor / outdoor / backup if it rains.
- Parking, rideshare pin, shuttle, “do not drive.”
- Kids policy, in one unambiguous sentence.
- Phones / photos during the ceremony (unplugged?).
- Gifts: registry only, no boxed gifts at the venue, cash fund, “your presence is enough”?
- Plus-ones: if it isn’t on the invite, it isn’t a plus-one?
- What time should people actually arrive vs. what’s printed?
- Bar: open, beer-and-wine, signature cocktail, cash, dry?
- End time / after-party location.
- Accessibility: stairs, gravel, hearing assistance, nearby restrooms.
- Weather / altitude / sun: hats, jackets, bug spray.
- Anything guests always get wrong about this venue or this city?

---

## 8. Travel for out-of-towners

- Nearest airport(s), and is one clearly better?
- Hotel block(s): name, rate, code, cutoff, cancel policy, walking distance vs. drive.
- Second-choice hotels or a neighborhood to search.
- Should we warn people off certain areas / hotels?
- Rental car: need one, or rideshare is enough?
- Things to do — your actual favorites, not TripAdvisor. Brunch, a walk, a bar, one outing.
- Welcome bag / hospitality suite / slack channel / group text? (Usually not a website problem.)

---

## 9. Content and assets we will need

Not all at once. A first site can ship with a hero, date, venues, and “details coming.”

- Hero photo + 5–15 more you’re proud of (originals, not Instagram screenshots).
- Venue name, address, website, parking notes, any vendor-provided map.
- Hotel block details.
- Registry links.
- Dress code wording.
- Short bios if there’s a wedding-party page.
- Our-story beats (even bullets are enough; we can turn them into copy).
- Monogram / crest / invite artwork if it exists.
- Color values from the paper suite if you have a designer.
- A list of names that must be spelled correctly. (Parents, wedding party, venues.)

### Privacy / photos

- Are we allowed to put these photos on a public URL?
- Any photos of children? Last names of children?
- Photographer credit on the site?

---

## 10. After it launches

- Who can ask Joel for a copy change — both of you, or one point person?
- How often will details change between now and the wedding? (Hotels and RSVP deadline always do.)
- Do you want a post-wedding mode later (thank you, photos, that’s it) or should the site just go down?

---

## 11. Hosting notes (for Joel)

This is a static React + shadcn SPA. That is a solved problem. The hosting choice is about **domain + HTTPS + git-push deploys**, not architecture.

### Do not use a GitHub Gist

Gists are for snippets. They do not host a React app, do not give you a custom domain, do not handle client-side routing, and the URL looks like a pastebin. Guests will not take it seriously.

If the idea was “store the site content as a JSON gist and fetch it at runtime,” that’s also more fragile than keeping copy in the repo. For a wedding site the content changes a handful of times; commit it.

### Good options, in order

**1. Cloudflare Pages or GitHub Pages (recommended)**
Push to `main`, get HTTPS and a custom domain. Free. Perfect match for a Vite/React SPA. Cloudflare Pages is a bit nicer (preview deploys, redirects, optional Access in front of the site). GitHub Pages is the fewest new accounts if the repo is already on GitHub.

**2. AWS S3 + CloudFront + Route 53**
Worth it if you already have the domain in Route 53, ACM muscle memory, and you want this sitting next to other infra. Same end result as Pages, more YAML. Reach for this if you later want CloudFront Functions for a real password, or Lambda for a custom RSVP. For v1 it is extra surface area.

**3. Vercel / Netlify**
Same job as Cloudflare Pages. Fine if you already like them. No strong reason to introduce them just for this.

**4. Hybrid: pretty site static, RSVP elsewhere**
This is the grown-up default. Host the SPA on Pages. RSVP via Tally/Google Form or Zola. Registry via Zola/Amazon. You keep the design; you do not keep a database of Aunt Linda’s meal choice.

### Domain

Buy the domain wherever you already manage DNS. Point it at Pages or CloudFront. `wesleyandsela.com` (or similar) on a real domain is the whole “this is a real website” trick. A `*.github.io` URL is fine for previews, not for the invite.

### Password / privacy

A JavaScript “enter the password” gate is not security. It hides from polite relatives and search engines that don’t execute JS. If they want it actually private:

- Cloudflare Access (email OTP for anyone with the link, or a shared password via Access)
- CloudFront + a Lambda@Edge / CloudFront Function basic-auth
- `noindex` + a slightly obscure URL, if “not googled” is enough

Most couples are fine with public + `noindex` and not posting the address of the house they’re getting ready in.

### What AWS *is* worth adding later

Only if they pick custom RSVP (option E above):

- Lambda + API Gateway + DynamoDB (or SES) for submissions
- A tiny passworded admin page to export CSV

Do not build that until they know they hate Google Forms.

### Recommendation

Ship v1 as **GitHub repo → Cloudflare Pages (or GitHub Pages) → custom domain**. Keep RSVP as a form link. Revisit AWS only if a custom RSVP becomes a real desire, not a hypothetical.

---

## Suggested first conversation (20 minutes)

1. Date, city, venues, URL name.
2. Three vibe words + any paper suite / photos they already love.
3. Check the section table: home, schedule, travel, RSVP, FAQ, registry, story, party.
4. RSVP lane: form link vs. on-site form vs. Zola.
5. Who is the point person for copy, and when they need a shareable URL.

Everything else can follow in a shared note as they decide it.
