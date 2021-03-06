import Util       from 'tjsdoc-test-utils';

import testConfig from '../../testConfig.js';

testConfig.forEachTarget('html_doc', 'classProperty', (target) =>
{
   /** @test {ClassDocBuilder} */
   describe(`TestClassPropertyDefinition (${target.name}):`, () =>
   {
      let doc;

      before(() =>
      {
         doc = Util.readDoc(target,
          'class/test/fixture/package/src/classproperty/Definition.js~TestClassPropertyDefinition.html');
      });

      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('in summary', () =>
      {
         it('has static member', () =>
         {
            Util.find(doc, '[data-ice="staticMemberSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)',
                   'public static p1: number this is static p1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a',
                   'class/test/fixture/package/src/classproperty/Definition.js~TestClassPropertyDefinition.html#static-classproperty-p1',
                    'href');
               });
            });
         });

         it('has member.', () =>
         {
            Util.find(doc, '[data-ice="memberSummary"]', (doc) =>
            {
               Util.find(doc, 'table[data-ice="summary"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public p1: number this is p1.');

                  Util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a',
                   'class/test/fixture/package/src/classproperty/Definition.js~TestClassPropertyDefinition.html#instance-classproperty-p1',
                    'href');
               });
            });
         });
      });

      /** @test {ClassDocBuilder#_buildClassDoc} */
      describe('in detail', () =>
      {
         it('has static member.', () =>
         {
            Util.find(doc, '[data-ice="staticMemberDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#static-classproperty-p1', 'public static p1: number');
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is static p1.');
               });
            });
         });

         it('has member.', () =>
         {
            Util.find(doc, '[data-ice="memberDetails"]', (doc) =>
            {
               Util.find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc) =>
               {
                  Util.assert.includes(doc, '#instance-classproperty-p1', 'public p1: number');
                  Util.assert.includes(doc, '[data-ice="description"]', 'this is p1.');
               });
            });
         });
      });
   });
});
