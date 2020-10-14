const arrProperties = `
   top: 0;
   left: 0;
   right: 0;
   z-index: 1;
   height: 60px;
   display: flex;
   position: fixed;
   align-items: center;
   padding: 0 55px 0 55px;
   background-color: #ffffff;
   justify-content: space-between;
   box-shadow: 0 0 1px 1px #0000001a;
   grid-template-areas:
      "one one two two"
      "one one two two"
      "three three four four"
      "three three four four";
   grid-template-areas: 
      "a a a"
      "b c c"
      "b c c";
`
   .trim()
   .split(";");

console.time();

const result = arrProperties
   .map((property) => property.toString().trim() + ";")
   .sort((a, b) => b.length - a.length)
   .slice(0, arrProperties.length - 1)
   .join("\n");

console.log(result);

console.timeEnd();
