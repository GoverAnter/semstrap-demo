## Skills

This is mostly a nicer resume, but hey, it's here !

### Development

- Mastered languages :
  - Java
  - HTML5
  - CSS3
  - SCSS
  - JavaScript
  - TypeScript
  - Templating languages (JSP and Thymeleaf)
- Back-ends done in JavaScript (and TypeScript) with NodeJS, and in Java using Spring or Akka
- Front-ends done in Java using templating languages, and using VueJS (mostly in Single Page Apps)
- Usage of the client-side store pattern using Vuex, Internationalisation using Vue-i18n and routing using Vue-router
- Micro-services back-ends, either using Spring or Akka, linked by HTTP calls, Kafka or NATS, everything traced with OpenTracing
- Reactive APIs with GraphQL (Java and NodeJS back-end-side, VueJS front-end-side)
- Java experiences (my main language) :
  - Spring Boot (1.x and 2.x) / Spring Cloud, with and without the Netflix stack
  - REST back-ends, using Spring, and a personnal framework with Akka
  - Natural language processing using StanfordNLP (as a side project)
  - Cryptography with custom-made algorithms

### Databases

I have a large experience with all these databases :

- Elasticsearch
- MySQL
- Neo4j
- Couchbase (which is my personnal preference)

### Infrastructure

- Daily usage of Docker (on Windows AND Linux)
- Experiences using VMWare ESXi 5.5, 6, Mesosphere DC/OS and Kubernetes
- DevOps stacks deployments on premise : Gitlab, Jenkins, Sonarqube, Jira, Bitbucket, Bamboo
- Monitoring stacks deployments, also on premise : Prometheus, Kibana, Jaeger, Grafana

### Certifications

- RIPE NCC IPv6

## My background (story of my life !)

The real interesting part (...) is the last one, named "Nowadays".

#### First experiences

I learned how to program when i was 13 or 14 yo, and since then, i never stopped. I began using Java, as it was the language that was used by Minecraft, and at this time, we all wanted to create mods. I never created Minecraft mods, because i fell in love with the sole act of programming.

Did a few little things to learn Java, then, i started to learn some Python. And god i didn't liked it ! I never used Python again from that time !

After my Python experience, i did some c++. For quite a time actually. I used low level graphics API, mainly OpenGL, but i also used the Direct3D API a bit. I was not making significant things, but i was enjoying what i was doing.

And then, i asked myself a question : what to do next ? The answer is surprising : i did some cryptography algorithms. The firsts were very basic, mainly based on the Caesar encryption algorithm. But soon, it evolved into something much more interesting and complex, into the algorithm i have today. I never wanted to publish it, but i always wanted to evaluate it, and unfortunately, i never found someone to tell me how good (or bad) it is.

At this moment, i started web programming, did a few forums and websites for friends, using PHP5 and HTML4 (at this time, HTML5 was still a draft, near release).

By high school, i was mainly upgrading my cryptography algorithm in java, and i did a few small games using Unity3D.

When i finished high school, i went to Bordeaux 1, Bordeaux's science college, to be graduated in programming.
Spoiler alert : i stopped 2 weeks later.

#### Doing it for a living

It was not my thing, so, with a friend, which became my associate, we began working on a video game.
First prototypes where not concluding, for a number of reasons including mainly game design decisions, and well, i was alone working on it !
The project, called "Runners", stayed in the Steam Greenlight top 3 for 3 weeks (it was a blast for us, people were looking forward to our game, damn !).
After a bad marketing campaign (WE ALL DO MISTAKES !!), we stopped the project on a small 1$ funding  on Indiegogo.

Fun fact, one year later, a game went out, called "The culling", same concept, same graphical design (but they finished the game, not us...).
Sold 1 million copies the first month, and it launched (well, skyrocketed) the concept of battle royale. I could have been billionaire, but hey, i never thought this kind of game could be THAT played (we're talking possibly 100 millions player total on all games, which is HUGE).

We then moved on a second game project, but this time with a small team, of which i was the lead. Everyone was doing it during their free time, which eventually killed the projects a few months after.

We then started to work on something different : cloud hosting.

#### The big project

The idea was simple : to give people the ability to make a custom cloud architecture using small and simple components.

Everything was based on Docker and VMWare ESXi, with a big emphasis on easy-to-use and configuration-less stuff. I conceived a small utility suite to help us doing so, and conceived a datacenter architecture to accomodate everything.
The main part of the project was to have servers (machines !) in a datacenter not far from where we lived.
We did everything, with the help of an accountant friend, from the business plan to the budgets.

And then, well, France.
It took us 6 months to prepare paperwork (because it was damn hard in our case; mainly because of mixing software and hardware). After that, it took us another 6 months to have paperwork about the project they call "receivable". 6 months later, nothing changed. Everything was damn slow. Months to get a rendez-vous.

After a year and a half without revenue, i decided to part way with my mates. Pretty sad times, but needed.

#### The after

I then decided to become a freelancer in web developpment. I started working for an intermediate, a fellow musician and a friend, who found me my first contracts.
At the time, i was still working on PHP5 - PHP7, HTML5 and CSS3.

At some point, we discussed about a nice project, a platform where you could, basically, manage a company. We had a market for that, so i started working on it right away.

#### Nowadays

I needed to learn A LOT to do such things. I started with server-side Java (instead of PHP). I learned how to use Spring MVC 4, using JSP.
I conceived a few demos, but nothing really satisfying, and my workflow was, let's be honest, horribly bad and terrible !!
I needed to learn more.

I start learning about web app back-end architecture, especially the micro-services one. The moment i started, i fell in love with it. It was the solution to all of my problems. Well, it brought a lot of other problems.
So i learned how event-driven services worked, at every step doing prototypes and testing things out.
But there was still something wrong. By this time, i was not using JSPs anymore, but was using Thymeleaf, which is pretty much the same (can't remember why i changed). and the problem was there.

I learned how to use VueJS for a contract. And guess what, that was what i needed !!
Before that, i tried Angular 2, which i didn't liked because i wanted much more control over the thing. Vue brought me the powah !

I made the same thing i had done with Thymeleaf, but this time with Vue, in 3 days. 3 DAYS. It was ground-breaking !!

I then started to use Akka, because i was, at the time, not satisfied of how Spring worked (because Spring Cloud was just starting, in open beta).
During that time, i learned how to conceive and create fully reactive services, and i made the first fully satisfying prototypes.
Guess what, i stressed test it !! (got a new toy, wanted to play around with it !!)

For the test, i was generating 2 years worth of data for a small company (100 to 150 sales a day, 5 days a week, which represents roughly 3000 sales a month, 36000 a year), so it is roughly 70000 to 75000 sale events (every bit was random, between bounds, and i ran it multiple times).
Ingested it in 3 minutes. But wait, there's more ! At peek ingestion, i was at 1500 records per SECONDS !! Limiting element was the database, because of the HDD i was using. And it was only on my computer !! No fancy AWS servers, no nothing, 8 micro-services and a database on my computer. And i was not bypassing anything, which means JWT authentication for all records, no bulk. And that's not all : i was aggregating sales realtime, making it available on the web API REALTIME !!

I was so proud of me, but i soon discovered Akka's only default : networking. I was using Akka cluster, and i discovered i won't be able to scale it that much, and scaling it would be a bit worse. Soooooo having no other choices (beside redo entire parts of Akka), i came back to Spring, which had evolved into Spring Cloud and its joys (this framework is awesome).
Latest version of the back-end uses Kafka as main mean of transportation, and API is exposed through a custom gateway (which sends message to services using Kafka), the hole platform being monitored using OpenTracing.

Finishing the main back-end, i then needed to have a front-end that matches the perfectness of the back-end (notice how i'm proud of me !!).

This is the time when i started working on the Semstrap framework, 4 months ago.

#### Last words

I skipped a LOT of technical stuff, because it would be pretty boring with it. If you want to talk about something, feel free to email me, give me a call, send me a message, i'll be glad to answer !!