import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /**
    * @test {ClassDoc#@extends}
    * @test {DocResolver#_resolveNecessary}
    */
   describe(`TestExtendsMixin (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Mixin.js~TestExtendsMixin.html');
      });

      it('has expression extends.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="expressionExtends"]', (doc) =>
         {
            Util.assert.includes(doc, 'pre code',
             'class TestExtendsMixin extends mixin(TestExtendsMixinInner1, TestExtendsMixinInner2)');
         });
      });

      it('has extends chain.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="mixinExtends"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'TestExtendsMixinInner1, TestExtendsMixinInner2');

            Util.assert.includes(doc,
             'a[href="class/test/fixture/package/src/extends/Mixin.js~TestExtendsMixinInner1.html"]',
              'TestExtendsMixinInner1');

            Util.assert.includes(doc,
             'a[href="class/test/fixture/package/src/extends/Mixin.js~TestExtendsMixinInner2.html"]',
              'TestExtendsMixinInner2');
         });
      });
   });
});
