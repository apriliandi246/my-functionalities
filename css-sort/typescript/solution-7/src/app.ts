import { parse, generate } from "css-tree";

const cssCode: string = `
   section .component {
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
         "a a a"
         "b c c"
         "b c c";
      grid-template-areas:
         "one one two two"
         "one one two two"
         "three three four four"
         "three three four four";
      grid-template-areas:
         "one one two two"
         "one one two two"
         "three three four four"
         "three three four four";
   }

.card {
   width: 600px;
   border-radius: 3px;
   box-sizing: border-box;
   background: var(--sixth);
   border: 2px solid var(--fourth);
}

.card__head {
   padding: 17px;
   margin: 3px 0 4px 0;
}

.card__profile-photo {
   float: left;
   width: 50px;
   height: 50px;
   border-radius: 100%;
   border: 3px solid #20444e;
}

.card__username {
   float: left;
   color: #ffffff;
   font-size: 1rem;
   text-align: center;
   letter-spacing: 1px;
   text-decoration: none;
   margin: 17px 0 0 18px;
   font-family: var(--font-family);
   transition: padding-bottom 0.2s, transform 0.2s;
}

.card__image {
   width: 100%;
   height: 100%;
   margin-top: 15px;
   text-align: center;
}

.card__description {
   padding: 17px;
   color: #ffffff;
   font-size: 1rem;
   line-height: 25px;
   letter-spacing: 0.5px;
   white-space: pre-line;
   word-wrap: break-word;
   box-sizing: border-box;
   margin: -15px 0 17px 0;
   font-family: var(--font-family);
}

.card__footer {
   float: right;
   padding: 15px;
   color: #ffffff;
   font-size: 0.9rem;
   letter-spacing: 1px;
   font-family: monospace;
}

.card__username:hover {
   padding-bottom: 7px;
   transform: translateY(-4px);
   border-bottom: 3px solid #ffffff;
}
`;

function onSort(format: string, cssCode: string): string {
   let finalResult = "";
   const ast = parse(cssCode, { parseValue: false });
   const result = generate(ast).split("}");

   result.pop();

   for (let index = 0; index < result.length; index++) {
      const cssNode = result[index].split("{");
      const cssSelector = cssNode[0].trim();

      const cssProperties = cssNode[1]
         .trim()
         .split(";")
         .filter((property) => property.trim() !== "")
         .map((property) => property.trim() + ";")
         .sort((a, b) =>
            format === "min" ? a.length - b.length : b.length - a.length
         )
         .join("\n");

      finalResult += `${cssSelector} {\n ${cssProperties} \n}${
         index === result.length - 1 ? "\n" : "\n\n"
      }`;
   }

   return finalResult;
}

console.log(onSort("max", cssCode));
