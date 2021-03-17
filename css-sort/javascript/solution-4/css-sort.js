const properties = `
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
`;

function sortCssProperties(data, format) {
   if (format !== "min" && format !== "max") {
      throw new Error(`Format ${format} not found`);
   }

   const result = data
      .trim()
      .split(";")
      .filter((property) => property.toString().trim() !== "")
      .map((property) => `\t${property.toString().trim()};`)
      .sort((a, b) =>
         format === "min" ? a.length - b.length : b.length - a.length
      )
      .join("\n");

   return result;
}

console.log(sortCssProperties(properties, "min"));
