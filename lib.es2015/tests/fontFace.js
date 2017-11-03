import { getStyles, reinit, fontFace } from '../index';
import * as assert from 'assert';
describe("fontFace", function () {
    it('support font faces', function () {
        reinit();
        fontFace({
            fontFamily: '"Bitstream Vera Serif Bold"',
            src: 'url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf")'
        });
        assert.equal(getStyles(), '@font-face{font-family:"Bitstream Vera Serif Bold";src:url("https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf")}');
    });
});
