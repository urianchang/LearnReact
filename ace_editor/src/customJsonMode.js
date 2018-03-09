import 'brace/mode/json';

export class CustomHighlightRules extends window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules {
	constructor() {
		super();
		this.$rules = {
      "start" : [
          {
              token : "variable", // single line
              regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
          }, {
              token : "annotation",
              regex : '"<(.*)>"'
          }, {
              token : "string", // single line
              regex : '"',
              next  : "string"
          }, {
              token : "constant.numeric", // hex
              regex : "0[xX][0-9a-fA-F]+\\b"
          }, {
              token : "constant.numeric", // float
              regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
          }, {
              token : "constant.language.boolean",
              regex : "(?:true|false)\\b"
          }, {
              token : "text", // single quoted strings are not allowed
              regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
          }, {
              token : "paren.lparen",
              regex : "[[({]"
          }, {
              token : "paren.rparen",
              regex : "[\\])}]"
          }, {
              token : "text",
              regex : "\\s+"
          }
      ],
      "string" : [
          {
              token : "constant.language.escape",
              regex : /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\bfnrt])/
          }, {
              token : "string",
              regex : '"|$',
              next  : "start"
          }, {
              defaultToken : "string"
          }
      ]
		};
	}
}

export default class CustomJsonMode extends window.ace.acequire('ace/mode/json').Mode {
	constructor() {
		super();
		this.HighlightRules = CustomHighlightRules;
	}
}
