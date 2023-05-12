import {on, EventEmitter} from "node:events";
import process from "node:process";

const ee = new EventEmitter();

//emit later on
process.nextTick(()=> {
  ee.emit('foo','bar');
  ee.emit('foo', 42)
});

for await(const event of on(ee, 'foo')){
  console.log(event);
}