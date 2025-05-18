---
date:
  created: 2025-05-05
  updated: 2025-05-05
pin: false
categories:
  - Articles
tags:
  - Platform Engineering
slug: platforms-are-for-engineers
---

# Platforms Are For Engineers, Not Services

<img src="/assets/img/platforms_are_for_engineers/platform.png" alt="Image of a train station" style="float: left; width: 200px; margin-right: 12px"/>

If you ask ten engineers what they consider a "platform", or what "platform engineering" is, you'll
probably hear ten different answers. Even more problematic, I bet a high percentage of those answers will focus on the tech stack,
and not how the people that use it interact with it. I think it's time we start changing that notion, or risk ending up with disgruntled platform
engineers who are constantly unhappy with the way their platforms are being used, frustrated platform users that see technology adoption as toil, and leaders
that don't get the point of investing in an internal platform in the first place.

<!-- more -->

### What's a "Platform" Anyway?

The following is probably just another non-normative definition, but one I like to use.

> _A curated set of tools, services, capabilities, and enablement resources designed to streamline the software development lifecycle and operational processes within an organisation, facilitating the adoption of best practices and engineering standards._

It doesn't exactly roll off the tongue, and there's a quite a fair bit to unpack in that statement, so let's start. In my experience,
different groups of people tend to focus on different parts of that definition:

* _Platform Engineers_ want to build and deploy _"tools, services and capabilities"_ using cutting-edge tech that makes their platform more efficient and reliable.
* _Product Engineers_ expect _"enablement resources"_ to free them from doing the –what some consider– boring "platform bits" so that they can focus on delivering new cool features.
* If you know any _Product Leads_ you'll know the words _"streamline the software development lifecycle"_ are like music to their ears!
* _SREs_ rely on those _"operational processes"_ as ways to increase efficiency and reliability of the services deployed on the platform.
* Above all, _Engineering Leads_ are interested in driving _"best practices and engineering standards"_ to deliver a long-term strategy and increase cohesion across teams and codebases.

So, if you're still thinking a successful platform is a set of fault-tolerant clusters, flexible traffic routing, or
scalable telemetry pipelines, think again! Delivering infrastructure and tooling to engineers is only part of the story.
You may not feel a product engineer but your platform is your product! To truly reap the benefits of platform engineering
you need to take a step back and consider how people interact with your platform, and how you can make their lives
easier –and your systems better– by having tooling adopted effectively. You need to start with the "why".

### A Strategy Begins with a Diagnosis

One of the most influential books I've read in the last few years is _Good Strategy, Bad Strategy_ by _Richard P. Rumelt_. It has
shaped the way I approach large, complex initiatives across a range of domains. I truly recommend giving it a read. As a very short summary, _Rumelt_ uses his insight and experience across many fields and organisations to identify what
makes a strategy successful. One of the main takeaway messages is to avoid "fluff" in strategies, and to defer thinking
of actions until one has nailed down and constrained the problem to solve, and how the desired future state will
solve that problem.

<img src="/assets/img/platforms_are_for_engineers/dont_care_strategy.png" alt="Harry Potter not caring about a strategy that doesn't solve problems" style="display: block; margin: 0 auto; height: 200px;"/>

To illustrate this, let's get closer to my favourite domain: observability. Over the years, I've heard from many "we have/need a strategy
to adopt OpenTelemetry", and I appreciate this because I would love the whole world to use OpenTelemetry, and it's the right thing to do. However, a strategy shouldn't
solely be "OpenTelemetry adoption". It may be part of the implementation, but why are you adopting it in the first place? What problems are you trying to solve?
Without understanding this you risk missing important aspects in your solution.

Below is an extremely high level example of the type of thinking that _Good Strategy, Bad Strategy_ promotes,
focused on a particular area of OpenTelemetry adoption.

#### Diagnosis
Engineers struggle to correlate regressions in business KPIs with user experience, code changes, or backend service saturation. Teams operate independently in a "you build, you run it" model, but they lack expertise in observability, leading to delays in detecting and resolving revenue-critical incidents.

  
#### Guiding Policies
1. Use W3C Trace Context and W3C Baggage for context propagation across all services, _so that_ telemetry data
   can be correlated through services that are part of the same user interaction.
2. Auto-configure OpenTelemetry SDKs and contrib libraries to propagate standard context and to instrument known
   open-source libraries, _so that_ minimal telemetry is produced out of the box to help identify root causes of
   regressions, integrated with propagated context.
3. Use OpenTelemetry APIs and Semantic Conventions to generate real-time telemetry for application-specific telemetry, _so that_
  business KPIs can correlate to out-of-the-box telemetry emitted by the services involved in a given user interaction.
4. Exercise debugging skills frequently, using observability tooling effectively, _so that_ root cause analysis can be performed efficiently in the event of novel regression types.

#### Actions

1. Build a base Docker image that contains a default declarative configuration for W3C propagators, and a minimal, extensible set of instrumentation libraries to guarantee context propagation.
2. Template said declarative config with resource attributes obtained from environment variables that are automatically
   injected by deployment tooling.
3. Use phased rollouts to automatically create pull requests to all services to adopt said base Docker image.
4. Centralise training material and documentation to ensure engineers are set up for success when adding
   custom instrumentation using OpenTelemetry APIs.
5. Create hands-on labs to showcase best practices in debugging systems using advanced tooling.

A full-fledged strategy may have many of these diagnosis, guiding policies, and actions. Some of them may intertwine,
with one guiding policy addressing more than one challenge, or one action helping implement more than one policy. Altogether,
this strategy explains not just how, but also why.

!!! tip "So what?"

      When defining guiding policies, I find it's important to add a _"so what"_ aspect to each individual policy. It further explains the added value delivered, and connects the guidance back to the problem it solves.

You've seen how the strategy above puts emphasis on using words like "automatically" or "out-the-box", and
actions that contemplate not only the tooling itself, but how it will be rolled out and adopted, and ultimately how engineers
will use it effectively. If these latter aspects were not added to the strategy, we'd fail to address part of the
diagnosis, like the need for standardisation across the organisation paired with the lack of familiarity of engineers with
observability best practices.

### Making the Golden Path the Path of Least Resistance

I'm by no means trying to relate tech adoption to the Tao as described in the Tao Te Ching (or maybe I am), but the
metaphors of water used to describe some of the Tao's qualities are equally applicable in this context. Especially when
we think about water being adaptable and flexible, winding through uneven terrain, yet powerful enough to erode even the
hardest rocks over time.

As engineers, we always try to find the path of least resistance to solve a problem. If we find resistance in our way,
we'll spend time and effort to build something that works for us, even if that means eroding a beautiful path that's
been laid in front of us. So, if you have a set of best practices, or engineering standards, that you want
engineers to follow, you better provide them with the easiest way to do it, one that makes them go _"why would I do it any other way?"_. Otherwise,
you'll end up discovering why the word "engineer" comes from the same root as "ingenious" when they find wonderful ways
to work around limitations in your product! And, as you probably guessed, not always aligning with those engineering
standards.

The first time I learnt this concept was at CERN, in Geneva, where I was hired in 2011 to join a small team tasked with
building a new system called DB On Demand. The premise was simple: providing a scalable system that automates creation and management of
databases –MySQL, PostgreSQL, and later on InfluxDB–. We didn't know it at the time, but that was textbook platform engineering.

I was relatively fresh out of university at the time, and mostly a Java Developer, so as you can probably guess the Web UI I put
together as part of my responsibilities was... pretty basic. But the system was functional! And a little bit constrained, which has its own advantages.
You can read more about it in our [DB On Demand](../db_on_demand.md) paper published at the time in the
_Journal of Physics: Conference Series_, and you can also see part of that basic UI below.

<img src="/assets/img/platforms_are_for_engineers/dbod.png" alt="DB On Demand Web UI" style="display: block; margin: 0 auto; height: 350px;"/>

Although the functionality was relatively simple: DB creation, one-click upgrade, automated snapshots,
point-in-time recovery, monitoring, etc., the key part is that it integrated with the rest of the
world-class capabilities provided by the IT-DB group. This included features delivered by underlying Netapp storage like snapshots, thin
provisioning, defragmentation, efficient RAID6, SSD cache, etc. Users of the platform got this "for free", which is pretty appealing to anyone that's ever managed a database.

A few months after we opened up the system for early adopters, we had dozens of databases and multiple teams onboarded.
Nowadays, DB On Demand has evolved in many ways –no longer having that ugly UI, I've been told– and it hosts more than 1,250
databases. That's a lot of databases implementing best practices, that probably would have not, or at least not at that level, if those management
processes were not automated out of the box. I mean, if you get database management for free... _"why would you do it
any other way?"_.

Opinionated standards that are easy to adopt result in cohesive platforms and scalable architectures, and this can be a force multiplier to increase velocity for product teams, and to allow for faster evolution of the underlying platform.
Another good example of this is explained in the great talk that _Karan Thukral_ and _Harvey Xia_, from _Reddit_, delivered at KubeCon NA 2024 in Salt Lake City, titled [_Evolving Reddit's Infrastructure via Principled Platform Abstractions_](https://www.youtube.com/watch?v=ruto5Sak-jI).

!!! tip "Don't let the platform be a blocker"
   
      Default, auto-configured, opinionated standards don't imply that you should block any team that needs to deviate from those defaults for good reasons. In fact, you should encourage that input to improve your platform! Keep reading for more on this.

### Inverse Conway Manoeuvre to Synergise Platform and Enablement

> Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.

That's _Conway's Law_. It's well known, but how does it apply to platform engineering? To explain this, I would like to introduce
another influential read of the past few years: _Team Topologies_, by _Manuel Pais_ and _Matthew Skelton_. You can see
a short summary of the key concepts [on their website](https://teamtopologies.com/key-concepts), including the concepts of _Platform_ and _Enabling_ teams.

In the world of platform engineering, "platform" and "enablement" are two words that are often used interchangeably.
Most times, platform refers to the infrastructure, and enablement to the tooling that eases adoption of that platform. However, this presents a challenge:
are you really "enabling" other teams if the only thing you give them is the tool? For instance, if I give the highest-tech drill to
someone that's never used a drill before, can I expect them to drill a clean hole without teaching them how to use it?

This is the problem that _Enabling_ teams, as proposed by _Team Topologies_, aim to solve. These are teams that
mostly operate in a _Facilitating_ type of interaction mode with other teams, temporarily working with them to boost their skills in a
particular area, and then moving on to work with other teams. In our sample OpenTelemetry strategy above, this would be the team in charge
of driving hands-on labs, training sessions, and other work to ensure all teams gain familiarity with observability tooling
to operate their own services reliably, and to instrument their own workloads following best practices.

Back to _Conway's Law_. If we want to avoid a platform that's completely disconnected from the needs of its customers, encouraging teams to deviate from engineering standards,
we need to exercise what's coined by this book as an _Inverse Conway Manoeuvre_. Effectively, instead of waiting for
the team structure to shape the system, we should design team structures to match our desired architecture. Here, _Platform_ and _Enabling_ teams play a vital role to ensure that an internal platform can not only reduce toil and increase
adoption of best practices, but also allow for it to evolve with the industry, meeting their customers' needs.

<img src="/assets/img/platforms_are_for_engineers/interactions.png" alt="Interactions" style="display: block; margin: 0 auto; height: 600px;"/>

Platform teams should focus on delivering capabilities "as-a-service", including opinionated configuration or abstraction layers,
and be able to clearly model their interaction patterns with other teams in an agreed shared responsibility model. For example,
for those readers familiar with OpenTelemetry, a platform team can provide OTel distributions with default configurations that make their applications "just work"
when deployed on their platform, or provide managed pipelines to ingest telemetry into observability platform. However,
it should be the responsibility of the service owner to add domain-specific telemetry to their own service, and to use
it effectively to operate it in production. If there's a gap in their skillset, these teams can request help from _Enabling_
teams to skill up, but those will be facilitating, and not running the show.

This referred to as [interaction modelling](https://teamtopologies.com/key-concepts-content/team-interaction-modeling-with-team-topologies),
and it's a crucial part of designing team structures to match a particular desired architecture. Even in cases where
the size of the organisation does not allow to have both a _Platform_ and an _Enabling_ team, drawing those boundaries
and having a common understanding of how different teams interact with each other.

Now that we're onto agreed interaction modes between teams, the next step is measuring compliance with that agreement
over time. Something that can be modelled as SLAs/SLOs and engineering scorecards, but this blog post is getting too long,
so I'll save that for next time!