# Event Loop

I did not realized that event-loop is a critical topic even for newbie when I tried to explain what is callback to senior student.

I think callback is one of the top-5 `web-js-specific` programming paradigms any JS developer should know and better grasp.

## Mental Model

I was shocked when I learned from [Ahmad Awais](https://twitter.com/MrAhmadAwais) that most of diagrams you could find on internet illustrating how event loop works are quite different form what it really is.

So It leads to a question how to build up the correct mental model for event-loop.

Well it is beyond the scope of web development for sure.

I think there must be two sides the node is dealing with.

- the operation system via c++ (OS)
- the exposed api to javascript (API)

As a web developer the API part should be more concerned. And the OS part helps us understand what actually happens under the hood.

## References

- [Official Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

- [Morning Keynote- Everything You Need to Know About Node.js Event Loop - Bert Belder, IBM](https://www.youtube.com/watch?v=PNa9OMajw9w)
