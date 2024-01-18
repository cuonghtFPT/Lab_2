const gameEvent = new Map([
   [17,'GOAL'],
   [36,'Substitution'],
   [47,'GOAL'],
   [61,'Substitution'],
   [64,'Yellow card'],
   [69,'Red card'],
   [70, 'Substitution'],
   [72,'Substitution'],
   [76,'GOAL'],
   [80,'GOAL'],
   [92,'Yellow card']
]);

// 1.
const events = [...new Set(gameEvent.values())];
console.log(events);

//2.
gameEvent.delete(64);

//3.
console.log(`An event happened, on average, every ${90 / gameEvent.size} minutes`);
const time = [...gameEvent.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvent.size} minutes`);

//4.
for(const [min,event] of gameEvent) {
   const half = min <= 45 ? 'FIRST': 'SECOND';
   console.log(`[${half} HALF] ${min}: ${event}`);
}