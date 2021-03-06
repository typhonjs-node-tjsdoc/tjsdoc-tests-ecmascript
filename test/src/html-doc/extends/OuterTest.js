import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'extends', (target) =>
{
   /** @test {ClassDoc#@extends} */
   describe(`TestExtendsOuter (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target, 'class/test/fixture/package/src/extends/Outer.js~TestExtendsOuter.html');
      });

      it('has extends chain.', () =>
      {
         Util.find(doc, '.self-detail [data-ice="extendsChain"]', (doc) =>
         {
            Util.assert.includes(doc, null, 'Array → TestExtendsBuiltin → TestExtendsOuter');

            Util.assert.includes(doc,
             'a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"]',
              'Array');

            Util.assert.includes(doc,
             'a[href="class/test/fixture/package/src/extends/Builtin.js~TestExtendsBuiltin.html"]',
              'TestExtendsBuiltin');
         });
      });

      it('has inherited methods, super class methods and more.', () =>
      {
         Util.findParent(doc, '[data-ice="inheritedSummary"] a[href$="TestExtendsBuiltin.html"]',
          '[data-ice="summary"]', (doc) =>
         {
            Util.assert.includes(doc, 'thead', 'From class TestExtendsBuiltin');

            Util.assert.includes(doc, 'thead a',
             'class/test/fixture/package/src/extends/Builtin.js~TestExtendsBuiltin.html', 'href');

            Util.assert.includes(doc, 'a[href$="#instance-classmethod-method1"]', 'method1');
         });
      });
   });
});
