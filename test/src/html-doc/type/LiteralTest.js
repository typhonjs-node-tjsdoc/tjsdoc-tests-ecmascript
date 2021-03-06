import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'type', (target) =>
{
   /**
    * @test {ParamParser#parseParamValue}
    * @test {ParamParser#parseParam}
    */
   describe(`TestTypeLiteral (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Literal.js~TestTypeLiteral.html');
      });

      it('has literal type.', () =>
      {
         Util.findParent(doc, '[data-ice="summary"] [href$="#instance-classmethod-method1"]', '[data-ice="target"]',
          (doc) =>
         {
            Util.assert.includes(doc, null, 'method1(p1: number, p2: string, p3: boolean)');

            Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
               'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'
            ], 'href');
         });
      });
   });
});
