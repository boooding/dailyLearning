const s = new Set();

// add
s.add("Matt").add("Frisbie");

// delete
s.delete("Matt");

// read
alert(s.has("Matt"));     // true
alert(s.size);            // 2

// clear
s.clear();  // destroys all values in this Set instance
