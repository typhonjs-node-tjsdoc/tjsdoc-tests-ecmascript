import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'access', (target) =>
{
   /** @test {ClassDocBuilder#_buildClassDoc} */
   describe(`TestAccessMethod (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/access/Method.js~TestAccessMethod.html');
      });

      describe('in summary:', () =>
      {
         it('has public accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="class/test/fixture/package/src/access/Method.js~TestAccessMethod.html#instance-classmethod-method1"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'public method1()');
            });
         });

         it('has protected accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="class/test/fixture/package/src/access/Method.js~TestAccessMethod.html#instance-classmethod-method2"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'protected method2()');
            });
         });

         it('has private accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="class/test/fixture/package/src/access/Method.js~TestAccessMethod.html#instance-classmethod-method3"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'private method3()');
            });
         });

         it('has auto private accessor.', () =>
         {
            Util.find(doc,
             '[data-ice="summary"] [href="class/test/fixture/package/src/access/Method.js~TestAccessMethod.html#instance-classmethod-_method4"]',
              (doc) =>
            {
               doc = doc.parents('[data-ice="target"]');
               Util.assert.includes(doc, null, 'private _method4()');
            });
         });
      });

      describe('in detail:', () =>
      {
         it('has public accessor.', () =>
         {
            Util.assert.includes(doc, '#instance-classmethod-method1', 'public method1()');
         });

         it('has protected accessor.', () =>
         {
            Util.assert.includes(doc, '#instance-classmethod-method2', 'protected method2()');
         });

         it('has private accessor.', () =>
         {
            Util.assert.includes(doc, '#instance-classmethod-method3', 'private method3()');
         });

         it('has auto private accessor.', () =>
         {
            Util.assert.includes(doc, '#instance-classmethod-_method4', 'private _method4()');
         });
      });
   });
});
