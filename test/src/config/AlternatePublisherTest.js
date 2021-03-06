import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'alternatePublisher', (target) =>
{
   /** @test {DocResolver#_resolveAccess} */
   describe(`test alternate config.publish (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-alternatePublisher.json',
          { silent: testConfig.consoleSilent, swapPublisher: false });
      });

      it('ran alternate publisher', () =>
      {
         Util.assert.isTrue(global.$$tjsdoc_alternate_publisher);
      });
   });
});


