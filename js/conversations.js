/* ===========================================
   ASHLEY SEPERS - CONVERSATION DATA
   All dialog content for the interactive portfolio
   =========================================== */

const CONVERSATIONS = {
    // =========================================
    // OFFICE ITEM DIALOGS
    // =========================================

    bookshelf: {
        title: "Testimonials",
        initial: {
            message: "This bookshelf has been with me for 20 years. It holds some of my favorite things - including what people have said about working with me.",
            photo: "default",
            choices: [
                { text: "What does a Sales Leader say?", next: "testimonial_sales" },
                { text: "What does an Engineering Lead say?", next: "testimonial_engineering" },
                { text: "What does an Executive say?", next: "testimonial_executive" },
                { text: "What does a Client Success Manager say?", next: "testimonial_csm" },
                { text: "Back to exploring", action: "close" }
            ]
        },
        testimonial_sales: {
            message: "\"Ashley is the reason our demos actually close deals. Every single demo she builds is researched specifically for that prospect—she knows their business, their challenges, their language. I've worked with a lot of sales support people, and most of them give you generic decks. Ashley gives you a customized experience that makes prospects feel understood. She's been involved in every win we've had since 2018, and that's not a coincidence. Plus, she's genuinely fun to work with.\"",
            photo: "thoughtful",
            choices: [
                { text: "Another testimonial", next: "initial" },
                { text: "That's great, thanks!", action: "close" }
            ]
        },
        testimonial_engineering: {
            message: "\"She's the only non-technical person I actually enjoy getting bug reports from. Most people file tickets that say 'it's broken' and leave you guessing. Ashley's tickets have clear reproduction steps, expected behavior, actual behavior, and business impact. She understands what we need to fix things efficiently. When she took over QA on the Neptune project, our resolution time dropped significantly because we weren't going back and forth trying to understand the issue.\"",
            photo: "thoughtful",
            choices: [
                { text: "Another testimonial", next: "initial" },
                { text: "That's great, thanks!", action: "close" }
            ]
        },
        testimonial_executive: {
            message: "\"What I value most about working with Ashley is that she doesn't just execute—she thinks. She'll come to me and say 'I noticed this gap between how Sales and Product are communicating, and here's what I think we should do about it.' Half the time I didn't even know the gap existed. She's the kind of person who makes the whole organization run smoother just by being present and paying attention. And she does it without ego.\"",
            photo: "warm",
            choices: [
                { text: "Another testimonial", next: "initial" },
                { text: "That's great, thanks!", action: "close" }
            ]
        },
        testimonial_csm: {
            message: "\"Clients ask for her by name. When I'm swamped and Ashley steps in to cover a client call, I never worry. She knows the platform inside and out, she knows the client's specific setup, and she has this way of making people feel heard and supported. Clients have told me they feel like she actually cares about solving their problems, not just closing tickets. That's rare.\"",
            photo: "warm",
            choices: [
                { text: "Another testimonial", next: "initial" },
                { text: "That's great, thanks!", action: "close" }
            ]
        }
    },

    coffee: {
        title: "Coffee Break",
        initial: {
            message: "Ah, you caught me mid-caffeine! This is my thinking fuel. Remote work since 2014 means I've perfected the art of the home office coffee routine. Ask me anything - I'm caffeinated and ready.",
            photo: "playful",
            choices: [
                { text: "What's your ideal work environment?", next: "work_environment" },
                { text: "How do you stay productive remote?", next: "remote_tips" },
                { text: "Just admiring the mug", action: "close" }
            ]
        },
        work_environment: {
            message: "Small teams where I know everyone. I like one-on-ones over all-hands meetings. Places where transparency is real, where kindness and competence both matter, and where 'that's not my job' isn't in the vocabulary. Growth-stage companies where one person can have real impact, where processes are still being figured out.",
            photo: "thoughtful",
            choices: [
                { text: "What do you NOT want?", next: "dont_want" },
                { text: "Thanks for sharing!", action: "close" }
            ]
        },
        dont_want: {
            message: "Highly specialized roles where I'd only do one narrow thing. Rigid enterprise environments with politics and bureaucracy. Places where asking 'why' is seen as insubordination. Cultures that value performance over substance. Environments where I'd just be executing tasks without input into how things work.",
            photo: "thoughtful",
            choices: [
                { text: "Good to know!", action: "close" }
            ]
        },
        remote_tips: {
            message: "Honestly? It's about creating boundaries and rituals. The coffee routine is one of them. I've learned that remote work isn't about working all the time—it's about working intentionally. Having a dedicated space, clear start/end times, and yes, good coffee. Also, The Huckleberries help. Cats are excellent coworkers.",
            photo: "playful",
            choices: [
                { text: "Who are The Huckleberries?", next: "huckleberries" },
                { text: "Sounds like a good setup!", action: "close" }
            ]
        },
        huckleberries: {
            message: "Gertrude and Gherkin! Gertrude is the fluffy long-haired one - she supervises my meetings. Gherkin is the short-haired troublemaker who walks across my keyboard at the worst possible moments. They're somewhere in the office if you want to find them...",
            photo: "warm",
            choices: [
                { text: "I'll keep an eye out!", action: "close" }
            ]
        }
    },

    art: {
        title: "Philosophy Corner",
        initial: {
            message: "Ah, you found the philosophy corner. I studied hermeneutics at University of Guelph - the art and science of interpretation. It's not just academic background; it's the foundation of how I approach everything.",
            photo: "thoughtful",
            choices: [
                { text: "What's hermeneutics?", next: "hermeneutics" },
                { text: "How does that help with operations?", next: "philosophy_operations" },
                { text: "Interesting, thanks!", action: "close" }
            ]
        },
        hermeneutics: {
            message: "Hermeneutics is about how people interpret and understand information. Not just what they read, but how they make meaning from it. What creates clarity versus confusion. How context shapes understanding. Why technically 'correct' communication can still fail when it doesn't account for how the receiver will process it.",
            photo: "thoughtful",
            choices: [
                { text: "How does that apply to your work?", next: "philosophy_operations" },
                { text: "Fascinating!", action: "close" }
            ]
        },
        philosophy_operations: {
            message: "Everything! When I design training programs, I think about how people will interpret instructions under cognitive load. When I do QA, I think about edge cases that happen when users understand things differently than designers intended. When I work with AI, I understand where LLMs might misinterpret context. It's all about the gap between intent and interpretation.",
            photo: "thoughtful",
            choices: [
                { text: "Tell me about the AI work", next: "ai_philosophy" },
                { text: "That's really cool!", action: "close" }
            ]
        },
        ai_philosophy: {
            message: "I love working with AI as a tool, but I'm not a blind advocate. My philosophy background helps me understand how LLMs interpret and generate information - which makes me effective at identifying where they might misinterpret context or produce misleading results. I advocate for ethical AI implementation, appropriate guardrails, and transparency about limitations.",
            photo: "thoughtful",
            choices: [
                { text: "Thanks for explaining!", action: "close" }
            ]
        }
    },

    radio: {
        title: "Office Radio",
        initial: {
            message: "The office radio! Music helps me think. Would you like some background ambiance while you explore? (Feature coming soon - for now, imagine some nice lo-fi beats playing.)",
            photo: "playful",
            choices: [
                { text: "Sounds good!", action: "close" }
            ]
        }
    },

    chair: {
        title: "Interview",
        initial: {
            message: "Oh, hi there! Nice to meet you - I'm Ashley. I'm the person who sees the gaps between teams and builds the systems to fill them. What would you like to know?",
            photo: "default",
            choices: [
                { text: "Tell me about your work style", next: "workstyle" },
                { text: "What's your background?", next: "background" },
                { text: "Walk me through a major project", next: "project" },
                { text: "What are you looking for?", next: "looking_for" },
                { text: "Tell me something fun", next: "fun" },
                { text: "Thanks, that's all!", action: "close" }
            ]
        },
        workstyle: {
            message: "I'm a self-taught generalist who figures things out through pattern recognition and asking 'why' constantly. I'm comfortable wearing multiple hats and stepping into gaps without being asked. I've served as QA lead, project manager, product operations lead, sales enablement owner, and backup account manager - often simultaneously. People consistently come to me for answers, to work through problems, to test things.",
            photo: "thoughtful",
            choices: [
                { text: "How do you approach problems?", next: "problem_solving" },
                { text: "What makes you different?", next: "different" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        problem_solving: {
            message: "I ask 'why' constantly. Don't accept surface-level explanations or build solutions just because 'that's what's done.' Identify root causes, not symptoms. Design solutions based on evidence and iteration. I also take time to see many angles and genuinely problem-solve rather than rushing to surface-level solutions. This means my solutions actually stick.",
            photo: "thoughtful",
            choices: [
                { text: "That's a great approach", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        different: {
            message: "A few things: My philosophy background gives me a unique lens on how people interpret information - I design training and systems that respect how humans actually work. I'm a bridge builder between technical and business teams. And I'm genuinely delightful to work with - I read rooms, form rapport quickly, and guide teams through complexity with consideration for multiple perspectives.",
            photo: "warm",
            choices: [
                { text: "Tell me about the bridge building", next: "bridge" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        bridge: {
            message: "I translate technical capabilities into business value and user-friendly language. I help engineers understand user challenges. I help business stakeholders understand technical constraints. When ideas are lost in translation between teams, I step in to ensure equilibrium of understanding - I can articulate complex concepts clearly for any audience.",
            photo: "thoughtful",
            choices: [
                { text: "Ask something else", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        background: {
            message: "10+ years in operations, most recently 7+ years at Network Ninja / MainEvent - a field marketing SaaS platform. I joined when the team was about 10 people with no formal processes and built the operational infrastructure from scratch. I've done sales operations, enablement, QA, project management, AI product adoption, and served as Chief of Staff.",
            photo: "default",
            choices: [
                { text: "Tell me about the AI work", next: "ai_work" },
                { text: "What about before MainEvent?", next: "earlier" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        ai_work: {
            message: "Most recently, I led product adoption for MainEvent's AI agent product. I built the entire adoption infrastructure from scratch - manual testing framework for quality assurance, 5-phase onboarding methodology, educational curriculum, and 'Power Prompts' library for enterprise analytics. I was the first person to really take to the AI agents and became the go-to for everything related to them.",
            photo: "thoughtful",
            choices: [
                { text: "What's your view on AI?", next: "ai_view" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        ai_view: {
            message: "I love working with AI as a tool, but I'm not a blind advocate. I'm very critical and aware of limitations, hallucinations, and potential issues. My philosophy background helps me understand how LLMs interpret and generate information - which makes me effective at identifying where they might misinterpret context. I advocate for ethical implementation and transparency about limitations.",
            photo: "thoughtful",
            choices: [
                { text: "Ask something else", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        earlier: {
            message: "Before MainEvent, I did sales operations at an IBM reseller. Before that, I had a winding path through international finance - payroll and accounts in London, UK, accounts receivable in Toronto. I also studied social service work at George Brown College. Every experience taught me something about how organizations function and how people process change.",
            photo: "default",
            choices: [
                { text: "Ask something else", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        project: {
            message: "The Neptune project is my best example of end-to-end ownership. It was a major custom platform build for Neptune Retail Solutions. I led discovery and requirements gathering, created wireframes, built QA processes from scratch, then took over as PM when it went live - leading daily scrums with the dev team, managing Jira, triaging bugs.",
            photo: "thoughtful",
            choices: [
                { text: "What happened after launch?", next: "neptune_after" },
                { text: "Tell me about another project", next: "enablement_project" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        neptune_after: {
            message: "After launch, I transitioned into account manager role - managed the client relationship, handled escalations, ensured smooth operations. Then I successfully handed off to a dedicated AM with complete documentation and knowledge transfer. That's my signature pattern: See gaps, fill gaps, build systems, hand off when it's stable.",
            photo: "warm",
            choices: [
                { text: "That's impressive", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        enablement_project: {
            message: "Sales enablement at MainEvent is ongoing work I'm proud of. For a lean sales team of 2-4 people winning enterprise deals with Fortune 500 CPG brands, I create 30+ customized demo environments annually. Each one is specifically researched for that prospect's business, industry challenges, and use cases. I've contributed to 100% of sales wins since 2018.",
            photo: "warm",
            choices: [
                { text: "Ask something else", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        looking_for: {
            message: "It's about the team, not the title. Small teams where I know everyone. Advisor and sounding board roles where I can keep people grounded. Authentic cultures with real transparency. Growth-stage companies where one person can have impact. Remote work - I've been remote since 2014 and it works for how my brain operates.",
            photo: "warm",
            choices: [
                { text: "What roles fit?", next: "roles" },
                { text: "What don't you want?", next: "dont_want" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        roles: {
            message: "The title matters less than the environment, but these tend to be good fits: Product Operations, Revenue Operations, Chief of Staff (strategic, not administrative), Implementation/Solutions roles, Sales Enablement, Customer Success Operations. Basically anywhere that needs a Swiss Army Knife operator who builds systems and fills gaps.",
            photo: "thoughtful",
            choices: [
                { text: "Ask something else", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        dont_want: {
            message: "Highly specialized roles where I'd only do one narrow thing. Rigid enterprise environments with politics and bureaucracy. Places where asking 'why' is seen as insubordination. Cultures that value performance over substance. Environments where I'd just be executing tasks without input into how things work.",
            photo: "thoughtful",
            choices: [
                { text: "Ask something else", next: "initial" },
                { text: "Good to know, thanks!", action: "close" }
            ]
        },
        fun: {
            message: "Let's see... I have two cats called The Huckleberries - Gertrude (fluffy supervisor) and Gherkin (keyboard troublemaker). I love point-and-click adventure games like MYST - hence this website! I studied philosophy because I find how humans interpret information genuinely fascinating. And I'm based in Guelph, Ontario, which is just delightful.",
            photo: "playful",
            choices: [
                { text: "Tell me about The Huckleberries", next: "cats" },
                { text: "Why MYST?", next: "myst" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        cats: {
            message: "Gertrude is the long-haired one who thinks she runs my meetings. She'll sit just out of frame and judge everyone on camera. Gherkin is the short-haired chaos agent who has impeccable timing for walking across my keyboard during important moments. They're excellent coworkers, honestly.",
            photo: "warm",
            choices: [
                { text: "They sound great!", next: "initial" },
                { text: "Thanks!", action: "close" }
            ]
        },
        myst: {
            message: "MYST rewards curiosity and exploration - you piece together understanding through observation and experimentation. That's kind of how I approach work too. Plus there's something satisfying about a well-designed puzzle. Oregon Trail was a childhood favorite too, which explains... all of this.",
            photo: "playful",
            choices: [
                { text: "This site is very cool", next: "site_thanks" },
                { text: "Ask something else", next: "initial" }
            ]
        },
        site_thanks: {
            message: "Thanks! I wanted something memorable that actually showed my personality instead of just listing accomplishments. If a hiring manager is going to spend time learning about me, might as well make it enjoyable. Plus it's a good test - if this vibe doesn't resonate with someone, we probably wouldn't work well together anyway.",
            photo: "warm",
            choices: [
                { text: "Smart approach!", next: "initial" },
                { text: "Thanks for your time!", action: "close" }
            ]
        }
    },

    // The Huckleberries - Easter Eggs
    gherkin: {
        title: "Gherkin",
        initial: {
            message: "*Gherkin looks up at you with an expression of mild disdain* Mrow. (Translation: Yes, I'm the keyboard-walking cat. Ashley's important emails probably have a few of my contributions.)",
            photo: "playful",
            choices: [
                { text: "Good kitty!", next: "response" },
                { text: "*pets*", next: "pet" },
                { text: "Carry on, Gherkin", action: "close" }
            ]
        },
        response: {
            message: "*Gherkin blinks slowly* Mrrp. (Translation: I've seen every Zoom call. Every. Single. One. I have thoughts on your org structure but I'll keep them to myself.)",
            photo: "playful",
            choices: [
                { text: "A wise cat indeed", action: "close" }
            ]
        },
        pet: {
            message: "*Gherkin tolerates exactly 2.5 pets before walking away* Mrow. (Translation: Ashley is good at her job. I wouldn't let just anyone share my office. Now if you'll excuse me, I have a keyboard to walk across.)",
            photo: "playful",
            choices: [
                { text: "Thanks, Gherkin", action: "close" }
            ]
        }
    },

    gertrude: {
        title: "Gertrude",
        initial: {
            message: "*Gertrude surveys you with the gravitas of a fluffy supervisor* Prrrr. (Translation: I oversee all of Ashley's meetings. My performance reviews are thorough but fair.)",
            photo: "warm",
            choices: [
                { text: "What's your assessment?", next: "assessment" },
                { text: "Such a professional", next: "professional" },
                { text: "Nice meeting you, Gertrude", action: "close" }
            ]
        },
        assessment: {
            message: "*Gertrude settles into a loaf position* Mrrrr. (Translation: Ashley demonstrates strong gap-filling capabilities and excellent treat-providing consistency. Would recommend for hire. 5/5 paws.)",
            photo: "warm",
            choices: [
                { text: "High praise!", action: "close" }
            ]
        },
        professional: {
            message: "*Gertrude fluffs her fur with dignity* Prrrrp. (Translation: Someone has to maintain standards around here. Gherkin certainly won't. Now, have you considered reaching out to schedule an interview? Ashley makes excellent tea.)",
            photo: "warm",
            choices: [
                { text: "Thanks for the tip, Gertrude", action: "close" }
            ]
        }
    }
};

// Chat conversation data (for AshleyChat.exe in HireMeOS)
const CHAT_RESPONSES = {
    workstyle: {
        messages: [
            "Great question! I'm what you'd call a 'Swiss Army Knife' operator.",
            "I'm a self-taught generalist who figures things out through pattern recognition and asking 'why' constantly. I've worn many hats - QA lead, project manager, product ops lead, sales enablement owner, backup account manager - often simultaneously.",
            "People consistently come to me for answers, to work through problems, to test things, and to run ideas by. I become the go-to person across teams because I genuinely care about solving problems thoroughly."
        ],
        followUp: [
            { text: "How do you approach problems?", topic: "problems" },
            { text: "What makes you different?", topic: "different" }
        ]
    },
    problems: {
        messages: [
            "I ask 'why' constantly. I don't accept surface-level explanations or build solutions just because 'that's what's done.'",
            "I identify root causes, not symptoms. I take time to see many angles and genuinely problem-solve rather than rushing to surface-level solutions.",
            "This means my solutions actually stick. I design based on evidence and iteration, not assumptions."
        ],
        followUp: [
            { text: "Tell me about a project example", topic: "project" }
        ]
    },
    different: {
        messages: [
            "A few things make me different:",
            "My philosophy background (hermeneutics) gives me a unique lens on how people interpret information. I design training and systems that respect how humans actually work, learn, and adopt new behaviors.",
            "I'm a bridge builder between technical and business teams - I translate both directions and create shared understanding.",
            "And honestly? I'm genuinely delightful to work with. I read rooms, form rapport quickly, and guide teams through complexity with real consideration for multiple perspectives."
        ],
        followUp: [
            { text: "Tell me about the bridge building", topic: "bridge" }
        ]
    },
    bridge: {
        messages: [
            "I translate technical capabilities into business value and user-friendly language. I help engineers understand user challenges. I help business stakeholders understand technical constraints.",
            "When ideas are lost in translation between teams, I step in to ensure equilibrium of understanding.",
            "I can articulate complex concepts clearly for any audience - that's actually one of my superpowers."
        ],
        followUp: [
            { text: "Walk me through a project", topic: "project" }
        ]
    },
    hermeneutics: {
        messages: [
            "Hermeneutics is the art and science of interpretation - how people interpret and understand information.",
            "I studied it at University of Guelph, and it's not just academic background - it's the foundation of how I approach everything.",
            "When I design training programs, I think about how people will interpret instructions under cognitive load. When I do QA, I think about edge cases that happen when users understand things differently than designers intended.",
            "It's all about the gap between intent and interpretation - and I've built a career on bridging that gap."
        ],
        followUp: [
            { text: "How does this help with AI work?", topic: "ai" }
        ]
    },
    project: {
        messages: [
            "The Neptune project is my best example of end-to-end ownership.",
            "It was a major custom platform build for Neptune Retail Solutions. I led discovery and requirements gathering, created wireframes, built QA processes from scratch, then took over as PM when it went live.",
            "I led daily scrums with the dev team (4 developers), managed the Jira board, triaged bugs, and handled the first wave of user edge cases.",
            "After launch, I transitioned into account manager, then handed off to a dedicated AM with complete documentation. That's my pattern: See gaps, fill gaps, build systems, hand off."
        ],
        followUp: [
            { text: "Tell me about your AI work", topic: "ai" },
            { text: "What are you looking for next?", topic: "looking" }
        ]
    },
    ai: {
        messages: [
            "Most recently, I led product adoption for MainEvent's AI agent product - enabling clients to query field marketing data using natural language.",
            "I built the entire adoption infrastructure from scratch: manual testing framework for QA, 5-phase onboarding methodology, educational curriculum, and 'Power Prompts' library for enterprise analytics.",
            "Here's the thing though - I love working with AI but I'm not a blind advocate. I'm critical and aware of limitations, hallucinations, and issues.",
            "My philosophy background helps me understand how LLMs interpret information, which makes me good at identifying where they might misinterpret context or produce misleading results."
        ],
        followUp: [
            { text: "What are you looking for next?", topic: "looking" }
        ]
    },
    looking: {
        messages: [
            "Honestly? It's about the team, not the title.",
            "I want small teams where I know everyone. Advisor and sounding board roles where I keep people grounded. Authentic cultures with real transparency. Growth-stage companies where one person can have impact.",
            "Role types that fit: Product Operations, Revenue Operations, Chief of Staff (strategic, not administrative), Implementation/Solutions, Sales Enablement, Customer Success Operations.",
            "Basically anywhere that needs a Swiss Army Knife operator who builds systems and fills gaps."
        ],
        followUp: [
            { text: "What DON'T you want?", topic: "dontwant" }
        ]
    },
    dontwant: {
        messages: [
            "Fair question! I don't want:",
            "- Highly specialized roles where I'd only do one narrow thing",
            "- Rigid enterprise environments with politics and bureaucracy",
            "- Places where asking 'why' is seen as insubordination",
            "- Cultures that value performance over substance",
            "If this site's vibe doesn't resonate with someone, we probably wouldn't work well together anyway. That's kind of the point."
        ],
        followUp: []
    },
    fun: {
        messages: [
            "Fun facts about me!",
            "I have two cats called The Huckleberries - Gertrude (fluffy supervisor) and Gherkin (keyboard troublemaker). They're excellent coworkers.",
            "I love point-and-click adventure games like MYST - hence this whole website aesthetic!",
            "I've been remote since 2014 and it works perfectly for how my brain operates. Based in Guelph, Ontario, which is just delightful.",
            "And I studied philosophy because I find how humans interpret information genuinely fascinating. (Yes, really.)"
        ],
        followUp: [
            { text: "Tell me about The Huckleberries", topic: "cats" }
        ]
    },
    cats: {
        messages: [
            "The Huckleberries!",
            "Gertrude is the long-haired one who thinks she runs my meetings. She'll sit just out of frame and judge everyone on camera. Very supervisory energy.",
            "Gherkin is the short-haired chaos agent with impeccable timing for walking across my keyboard during important moments.",
            "They're somewhere in the office if you look around... they might even have opinions to share."
        ],
        followUp: []
    }
};

// Case study data for Work Examples
const CASE_STUDIES = {
    neptune: {
        title: "Neptune Retail Solutions - Custom Platform Build",
        content: `
            <h2>Neptune Retail Solutions - Custom Platform Build</h2>

            <h3>The Challenge</h3>
            <p>A major retail solutions company needed a custom platform build to manage their field operations at scale. They had complex workflows across multiple business units, existing systems that needed integration, and high expectations for quality and timeline.</p>

            <h3>What I Did</h3>
            <ul>
                <li><strong>Discovery & Requirements:</strong> Led initial discovery comparing their existing systems and day-to-day workflows. Identified what could work with our current platform versus what needed new development.</li>
                <li><strong>Design & Specification:</strong> Created wireframes and workflows that translated business requirements into technical specifications the dev team could build from.</li>
                <li><strong>QA Process Creation:</strong> Built a comprehensive QA process from scratch—testing protocols, quality standards, and coordination between our internal team and the client's QA team.</li>
                <li><strong>Project Management:</strong> Took over as PM when the platform went live. Led daily scrums with the development team (4 developers), managed the Jira board, triaged bugs, and handled the first wave of user edge cases.</li>
                <li><strong>Account Transition:</strong> Transitioned into account manager role post-launch, then successfully handed off to a dedicated AM with complete documentation.</li>
            </ul>

            <h3>The Outcome</h3>
            <p>Platform launched successfully with zero failed deployments. The QA process I built became the template for subsequent implementations. This project demonstrated the full "See Gaps → Fill Gaps → Build Systems → Hand Off" pattern in action.</p>
        `
    },
    ai: {
        title: "AI Product Adoption Infrastructure",
        content: `
            <h2>AI Product Adoption Infrastructure</h2>

            <h3>The Challenge</h3>
            <p>MainEvent launched an AI-powered analytics agent that let clients query their field marketing data using natural language. But AI products don't sell themselves—clients needed to understand what the tool could do, trust that it would give accurate results, and learn how to use it effectively. There was no existing adoption infrastructure.</p>

            <h3>What I Built</h3>
            <ul>
                <li><strong>Quality Assurance Framework:</strong> Built a manual testing framework from scratch—systematic process to test prompts and outputs for reliability, consistency, and accuracy before client deployment. Identified and resolved AI hallucinations through prompt refinement.</li>
                <li><strong>Onboarding Methodology:</strong> Designed a comprehensive 5-phase onboarding process: Initial Consultation & Discovery → Agent Implementation → Testing & Validation → User Training Sessions → Ongoing Support & Evaluation.</li>
                <li><strong>Educational Curriculum:</strong> Created training materials for varying technical proficiency levels—from basic everyday users to power users needing advanced analytical capabilities. Built a library of 50+ training videos and resources.</li>
                <li><strong>Power Prompts Library:</strong> Developed enterprise-level analytical prompt frameworks enabling clients to extract strategic business intelligence from their data.</li>
                <li><strong>Internal Advocacy:</strong> Served as critical voice advocating for AI quality, ethical implementation, and transparency about limitations.</li>
            </ul>

            <h3>The Outcome</h3>
            <p>Successfully onboarded major enterprise clients with custom analytical frameworks. Featured in client success case studies. The adoption infrastructure I built became the standard for all AI agent deployments. Owned the industry trade show booth from concept to execution.</p>
        `
    },
    enablement: {
        title: "Sales Enablement - Lean Team, Enterprise Results",
        content: `
            <h2>Sales Enablement - Lean Team, Enterprise Results</h2>

            <h3>The Challenge</h3>
            <p>A small sales team (2-4 people, depending on the period) needed to win enterprise deals with Fortune 500 CPG brands. They were competing against larger companies with dedicated sales enablement departments. The team composition changed over time, but the quality of demos and sales materials couldn't fluctuate.</p>

            <h3>What I Did</h3>
            <ul>
                <li><strong>Customized Demo Program:</strong> Created 30+ customized demo environments annually—each specifically researched for that prospect's business, industry challenges, and use cases. No generic decks.</li>
                <li><strong>Discovery Frameworks:</strong> Built qualification playbooks and discovery frameworks that helped sellers identify best-fit opportunities across varying sales cycles (same-day SMB to year-long enterprise).</li>
                <li><strong>Enablement Continuity:</strong> Served as the institutional knowledge across sales team changes. Maintained demo quality and sales approach consistency regardless of who was on the team.</li>
                <li><strong>Training Programs:</strong> Reduced new hire ramp time from 90 to 60 days through structured onboarding, self-service resources, and hands-on coaching.</li>
            </ul>

            <h3>The Outcome</h3>
            <p>Contributed to 100% of sales wins since 2018. The lean team consistently closed enterprise deals with Fortune 500 brands—competing successfully against much larger competitors. Every customer interaction demonstrated deep research and understanding of their specific business.</p>
        `
    }
};

// Make data available globally
window.CONVERSATIONS = CONVERSATIONS;
window.CHAT_RESPONSES = CHAT_RESPONSES;
window.CASE_STUDIES = CASE_STUDIES;
