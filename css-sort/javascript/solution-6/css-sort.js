const { parse, generate } = require("css-tree");

const cssCode = `
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

	.navbar {
		transition: background-color 0.2s;
		border: 1px solid #38444d;
		background-color: #253341;
		font-family: monospace;
		box-sizing: border-box;
		white-space: pre-line;
		margin-top: 17px;
		font-size: 18px;
		display: block;
		color: #f5f5f5;
		padding: 15px;
		outline: none;
		resize: none;
	}

	nav .navbar {
		transition: background-color 0.2s;
		border: 1px solid #38444d;
		background-color: #253341;
		font-family: monospace;
	}

	.el2 {
		white-space: pre-line;
		display: block;
		resize: none;
		font-family: monospace;
		width: 100%;
		padding: 15px;
		border: 1px solid #38444d;
		font-size: 18px;
		outline: none;
		transition: background-color 0.2s;
		box-sizing: border-box;
		background-color: #253341;
		margin-top: 17px;
		color: #f5f5f5;
	}

	nav .navbar {
		transition: background-color 0.2s;
		border: 1px solid #38444d;
		background-color: #253341;
		font-family: monospace;
	}

	.el2 {
		white-space: pre-line;
		display: block;
		resize: none;
		font-family: monospace;
		width: 100%;
		padding: 15px;
		border: 1px solid #38444d;
		font-size: 18px;
		outline: none;
		transition: background-color 0.2s;
		box-sizing: border-box;
		background-color: #253341;
		margin-top: 17px;
		color: #f5f5f5;
	}

  .component {
		transition: background-color 0.2s;
		border: 1px solid #38444d;
		background-color: #253341;
		font-family: monospace;
		box-sizing: border-box;
		white-space: pre-line;
		margin-top: 17px;
		font-size: 18px;
		display: block;
		color: #f5f5f5;
		padding: 15px;
		outline: none;
		resize: none;
		width: 100%;
	}

   .el3 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el4 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el5 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el6 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el7 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el8 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el9 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el10 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el11 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el12 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el13 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el14 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el14 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el14 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }

      .el15 {
      white-space: pre-line;
      display: block;
      resize: none;
      font-family: monospace;
      width: 100%;
      padding: 15px;
      border: 1px solid #38444d;
      font-size: 18px;
      outline: none;
      transition: background-color 0.2s;
      box-sizing: border-box;
      background-color: #253341;
      margin-top: 17px;
      color: #f5f5f5;
   }
`;

function onSort(format, cssCode) {
	let finalResult = "";
	const ast = parse(cssCode);
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
