const arrProperties = `
   grid-template-areas:
      "one one two two"
      "one one two two"
      "three three four four"
      "three three four four";
   box-shadow: 0 0 1px 1px #0000001a;
   justify-content: space-between;
   background-color: #ffffff;
   padding: 0 55px 0 55px;
   align-items: center;
   position: fixed;
   display: flex;
   height: 60px;
   z-index: 1;
   right: 0;
   left: 0;
   top: 0;
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
   .sort((a, b) => a.length - b.length)
   .slice(0, arrProperties.length - 1)
   .join("\n");

console.log(result);

console.timeEnd();
