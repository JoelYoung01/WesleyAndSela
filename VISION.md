## 1. The basics *



- Wedding date and (if known) start time?
	- First weekend of June (not sure exactly YET)

- City / region? Ceremony and reception at the same place, or two venues?
	- Waxhaw NC, Venue not picked yet.

- Is this a wedding weekend, a single day, or destination?
	- Most guests are out of state, so it's technically destination but also a weekend long probably.

- Working title for the site / URL preference? (`wesleyandsela.com`, `selaandwesley.com`, something else?)
	- `wesley-and-sela.joelyoung.dev` 

- Hard deadline for a first version people can share? Save-the-date date vs. invitation date vs. “whenever”?
	- Save the dates sent: not set
	- invitations sent: not set
	- website deadline: deployed and live today (not all details finalized but it will get updated frequently)
  

## 2. What is this site *for*? *

  

Wedding websites fail when they try to be everything. Pick a primary job:

  

- **Logistics hub** — where, when, stay, eat, RSVP. Pretty but practical.

- **Invitation companion** — the paper invite is the moment; the site holds the details that don’t fit on a card.

- **Story / mood** — photos, how you met, the aesthetic. Details are secondary.

- **Family diplomacy** — two families, two cities, lots of “who is this person” context.

> The primary use is logistics hub, details and rsvp link etc. pretty but practical


Follow-ups:

- Who is the audience? Close family, 150 mixed guests, destination guests who’ve never been to this city?
	- Guest count is <100 probably around 80 but not finalized yet.

- What should someone be able to do in 30 seconds on their phone?
	- RSVP
	- Information about event
	- Registry links

- Should search engines be able to find it, or should it stay link-only / lightly gated?
	- no intentional seo but it can be findable, nbd if it's accessible.

## 3. Vibe and design *

  

Show 3–5 reference sites or screenshots if you can. The Knot / Zola templates, friends’ sites, Pinterest, even a restaurant or hotel site that *feels* right.

  

- Three words for the feeling. (Examples: garden, city, desert, coastal, formal, weird, catholic, backyard, art-deco, camp, minimal, maximal.)
	- Woodsy, whimsical, romantic

- Color instincts: cream and sage? black and gold? full color photos and almost no palette?
	- Primary: #72892c, main background/surface: #f8ebe2 ![[Pasted image 20261024213650.png]]

- Type: serif and romantic, or clean sans-serif?
	- Titles serif and romantic, sans for body text.

- Dark and moody vs. light and airy?
	- light and airy, see theme words

- Any “please never”: script fonts, hearts, mason jars, countdown timers, sparkles, stock photos of rings, etc.
	- comic sans
	- 

- Favorite photos of the two of you — the ones you’d actually hang. We’ll need a hero and a few supporting shots.
	- joeleyoung01@gmail.com
  

### Tone of voice

- Who is writing the words — you two, Joel, or a mix?
	- mix

- Funny, formal, short and dry, or a little speech-y?
	- funny + formal

- First person plural (“we”), or a narrator (“Wesley and Sela”)?
	- first person plural
  

## 4. Common sections — pick what you actually want

  

Most good wedding sites are a short stack of these. Check yes / maybe / no. Notes in italics are the usual tradeoffs.

  

### Almost always worth it

  

| Section           | Want it? | What we need from you                                                                  |
| ----------------- | -------- | -------------------------------------------------------------------------------------- |
| **Home / hero**   | yes      | Names, date, one great photo, maybe a one-line welcome                                 |
| **Schedule**      | yes      | Ceremony, cocktail hour, reception, after-party; times; which are invite-only          |
| **Venue(s)**      | yes      | Names, addresses, map links, parking, what to expect when you arrive                   |
| **Travel & stay** | yes      | Airport, hotels with blocks, booking codes, cutoff dates, Airbnbs, parking, rideshares |
| **RSVP**          | yes      | See section 5. This is the one that has real product decisions                         |
| **FAQ**           | yes      | Kids? Dress code? Plus-ones? Gifts? Photos during the ceremony?                        |

  

### Very common

| Section           | Want it? | Notes                                                                                                  |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| **Our story**     | skip     | Cute if you have it; skip if writing it sounds painful. 3–6 short beats beat a novel                   |
| **Wedding party** | yes      | Names, relation, optional one-liner and photo. Gets outdated; keep it light                            |
| **Registry**      | yes      | Link out to Zola / Amazon / Target / Honeyfund or a honeymoon fund. Don’t host product grids ourselves |
| **Dress code**    | yes      | Black tie, cocktail, garden formal, “look nice.” Photos of the palette help more than words            |
| **Things to do**  | yes      | 5–8 local recs for out-of-towners: breakfast, a walk, a bar, one “if you have a car”                   |
| **Photos**        | link     | Engagement set now; a gallery later. Hosting lots of full-res images is the main perf concern          |

### Sometimes worth it


| Section                      | Want it?                                       | Notes                                                                   |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------- |
| **Weekend itinerary**        | yes                                            | Welcome drinks, rehearsal dinner, Sunday brunch. Who’s invited to which |
| **Getting ready / shuttle**  | no                                             | Pickup times and stops. High-value if parking is a nightmare            |
| **Livestream**               | no                                             | Link + time zone. Goes live that morning; don’t overbuild               |
| **Q&A / “ask us”**           | wedding email: selaandwesleyswedding@gmail.com | Usually just an email / phone. A public comment wall is a bad idea      |
| **Playlist / song requests** | no                                             | Fun; a Google Form is enough                                            |
| **Countdown**                | yes                                            | Polarizing. Easy to add, easy to skip                                   |
| **Password gate**            | no                                             | See hosting notes. Real protection needs the CDN, not a JS prompt       |
| **In loving memory**         | no                                             | Only if you want it. Keep it a quiet line, not a section                |
| **COVID / health**           | no                                             | Rare now; include only if you have an actual policy                     |

  

### Usually skip on a custom site
  

- Seating charts (change until the last night) 
	- skip

- Full guest list / “find your table”
	- skip

- Live chat
	- no

- Individual login per guest
	- no

- Blog / planning diary
	- nope

- Store / ticket sales
	- no

- Virtual guestbook that requires moderation (a physical one at the reception is less work)
	- nope

  

---

  

## 5. RSVP — the only real product decision *

  

A static site cannot store “yes, chicken, plus one.” Pick a lane:

  

**A. Link out to a form (recommended default)**

Google Form, Tally, Fillout, or Zola/The Knot RSVP. We style a nice “RSVP” page that explains the deadline and then send people to the form. You get a spreadsheet. Zero backend.

  yes, link not set. use placeholder (maybe a rick roll)

**B. Form backend as a service**

Formspree, Basin, Getform, or similar. We can design the RSVP UI on-site; submissions land in email / a dashboard. Still no server of ours. Small yearly cost.

  Nah we are just doing the google form

**C. “Email us / text us”**

Fine for a tiny wedding. Gets messy above ~40 people.

  yup see email earlier

**D. Full wedding platform**

Zola / WithJoy / The Knot for RSVP + registry, our site for everything pretty. Honest hybrid. Guests live in two places.

  Nope.


Questions to ask them:

  

- Do you already have a platform (Zola, WithJoy, Paperless Post) you like?
	- nope

- Do you need **household RSVP** (one person answers for a family) or is per-guest fine?
	- not relevant, handled by google form

- Meal choice? Dietary restrictions? Song requests? Shuttle seat? All of those are extra form fields.
	- also handled by form

- Plus-one rules: named plus-ones only, or “and guest”?
	- no plus unless explicitly said otherwise on invite

- Kids: none, ceremony only, all ages, or a specific cutoff?
	- no need to even mention this one on the site probably, not a problem

- RSVP deadline?
	- not set yet

- Who is watching the inbox / spreadsheet as replies come in?
	- both sela and wesley and mom

- Do you want a “change my RSVP” path, or is a follow-up text enough?
	- follow up text is enough (point users at the wedding email or otherwise)

  

---

  

## 6. People, families, politics

  

Ask these privately; don’t put the awkward answers on the site.

  

- How do you want parents / families listed? Both sets? Step-parents? “Together with their families”?
	- not listed on site

- Anyone who must be named, and anyone who must not?
	- nope

- Wedding party: who, photos or no photos, order?
	- not on site

- Officiant name on the site?
	- nope

- Cultural or religious elements guests should know about (ceremony length, covering shoulders, receiving line, etc.)?
	- nope

- Two last names, a name change, or neither — and when does that go live?
	- not on site
  

---

  

## 7. Day-of logistics (the FAQ goldmine)

  

Guests will ask these whether or not you write them down.

  

- Dress code, including shoes (grass, gravel, dance floor).
	- summer semi formal, wear clothes
	- shoes: ground is grass

- Indoor / outdoor / backup if it rains.
	- outdoor

- Parking, rideshare pin, shuttle, “do not drive.”
	- not sure yet

- Kids policy, in one unambiguous sentence.
	- "there's so few kids coming this doesn't need to be on the site"

- Phones / photos during the ceremony (unplugged?).
	- unplugged!

- Gifts: registry only, no boxed gifts at the venue, cash fund, “your presence is enough”?
	- they'll have an amazon registry, venmo, and boxed gifts at venue is fine.

- Plus-ones: if it isn’t on the invite, it isn’t a plus-one?
	- See previous direction. maybe in FAQ prompt reader to reach out if they have questions

- What time should people actually arrive vs. what’s printed?
	- tbd

- Bar: open, beer-and-wine, signature cocktail, cash, dry?
	- dry

- End time / after-party location.
	- tbd

- Accessibility: stairs, gravel, hearing assistance, nearby restrooms.
	- tbd

- Weather / altitude / sun: hats, jackets, bug spray.
	- It's early June in NC, it'll be hot. Bug spray isn't a bad idea either

- Anything guests always get wrong about this venue or this city?
	- N/A
  

---

  

## 8. Travel for out-of-towners

  

- Nearest airport(s), and is one clearly better?
	- Charlotte airport is fine

- Hotel block(s): name, rate, code, cutoff, cancel policy, walking distance vs. drive.
	- tbd

- Second-choice hotels or a neighborhood to search.
	- tbd

- Should we warn people off certain areas / hotels?
	- tbd

- Rental car: need one, or rideshare is enough?
	- tbd

- Things to do — your actual favorites, not TripAdvisor. Brunch, a walk, a bar, one outing.
	- tbd

- Welcome bag / hospitality suite / slack channel / group text? (Usually not a website problem.)
	- N/A

  

---

  

## 9. Content and assets we will need

  

Not all at once. A first site can ship with a hero, date, venues, and “details coming.”

  

- Hero photo + 5–15 more you’re proud of (originals, not Instagram screenshots).
	- See images folder

- Venue name, address, website, parking notes, any vendor-provided map.
	- tbd

- Hotel block details.
	- tbd

- Registry links.
	- tbd

- Dress code wording.
	- tbd

- Short bios if there’s a wedding-party page.
	- tbd

- Our-story beats (even bullets are enough; we can turn them into copy).
	- tbd

- Monogram / crest / invite artwork if it exists.
	- tbd

- Color values from the paper suite if you have a designer.
	- see earlier color hex's

- A list of names that must be spelled correctly. (Parents, wedding party, venues.)
	- tbd

  

### Privacy / photos

  

- Are we allowed to put these photos on a public URL?
	- yup

- Any photos of children? Last names of children?
	- none

- Photographer credit on the site?
	- yes, details added later (David Lara)

  

---

  

## 10. After it launches

- Do you want a post-wedding mode later (thank you, photos, that’s it) or should the site just go down?
	- post wedding mode for sure. And separate mode for day-of that makes it even easier to get to venue details and whatnot.

  