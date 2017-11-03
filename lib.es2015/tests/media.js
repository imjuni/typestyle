import { cssRule, style, getStyles, reinit, media } from '../index';
import * as assert from 'assert';
describe("media query", function () {
    it("standard freestyle", function () {
        reinit();
        style({
            color: 'red',
            $nest: {
                '@media (min-width: 400px)': { color: 'red' }
            }
        });
        var standardFreeStyle = getStyles();
        reinit();
        style({ color: 'red' }, media({
            minWidth: 400
        }, { color: 'red' }));
        assert.equal(getStyles(), standardFreeStyle);
    });
    it("support type", function () {
        reinit();
        style({ color: 'red' }, media({ minWidth: 400, type: 'screen' }, { color: 'red' }));
        assert.equal(getStyles(), '.f1960l9c{color:red}@media screen and (min-width: 400px){.f1960l9c{color:red}}');
    });
    it("support $nest", function () {
        reinit();
        style(media({ minWidth: 400 }, {
            color: 'red',
            $nest: {
                '&:hover': {
                    color: 'green'
                }
            }
        }));
        assert.equal(getStyles(), '@media (min-width: 400px){.f1wrs385{color:red}.f1wrs385:hover{color:green}}');
    });
    it("support non-pixel min-width", function () {
        reinit();
        var mediaRules = media({ minWidth: '20vh' }, { width: '10vh' });
        cssRule('.component', mediaRules);
        assert.equal(getStyles(), '@media (min-width: 20vh){.component{width:10vh}}');
    });
    it("support non-pixel max-width", function () {
        reinit();
        var mediaRules = media({ maxWidth: '20vh' }, { width: '10vh' });
        cssRule('.component', mediaRules);
        assert.equal(getStyles(), '@media (max-width: 20vh){.component{width:10vh}}');
    });
    it("support non-pixel min-height", function () {
        reinit();
        var mediaRules = media({ minHeight: '20vh' }, { height: '10vh' });
        cssRule('.component', mediaRules);
        assert.equal(getStyles(), '@media (min-height: 20vh){.component{height:10vh}}');
    });
    it("support non-pixel max-height", function () {
        reinit();
        var mediaRules = media({ maxHeight: '20vh' }, { height: '10vh' });
        cssRule('.component', mediaRules);
        assert.equal(getStyles(), '@media (max-height: 20vh){.component{height:10vh}}');
    });
});
