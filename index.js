const t = require('@babel/types');
const p = require('path');
module.exports = function() {
    return {
        visitor: {
            Statement: function(path, state) {
                if(t.isDebuggerStatement(path.node)) {
                    const filename = p.parse(state.file.opts.filename).base;
                    const lineNum = path.node.loc.start.line;
                    const message = `----- here : ${filename} line ${lineNum} -----`;
                    // path.getPath
                    path.replaceWith(
                        t.callExpression(
                            t.memberExpression(
                                t.identifier("console"),
                                t.identifier("log")
                            ),
                            [
                                t.stringLiteral(message)
                            ]
                        )
                    );
                }
            }
        }
    }
}