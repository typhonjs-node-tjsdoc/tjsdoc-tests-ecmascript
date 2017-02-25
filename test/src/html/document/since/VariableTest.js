import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.since)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@since} */
      describe('testSinceVariable', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         describe('in summary', () =>
         {
            it('has since.', () =>
            {
               Util.findParent(doc, '[data-ice="summary"] [href$="#static-variable-testSinceVariable"]',
                '[data-ice="target"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });
         });

         describe('in detail', () =>
         {
            it('has since.', () =>
            {
               Util.findParent(doc, '[id="static-variable-testSinceVariable"]', '[data-ice="detail"]', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
               });
            });
         });
      });
   }
}