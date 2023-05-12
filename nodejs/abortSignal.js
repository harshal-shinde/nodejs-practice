import {on, EventEmitter} from "node:events";
import process from "node:process";

const ac = new AbortController();

(async() => {
  const ee = new EventEmitter();

  //emit later on
  process.nextTick(()=> {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42)
  });

  for await(const event of on(ee, 'foo', {signal:ac.signal})){
    console.log(event);
  }
})();

process.nextTick(()=> ac.abort());

