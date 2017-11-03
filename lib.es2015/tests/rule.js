import { getStyles, reinit, cssRule } from '../index';
import * as assert from 'assert';
describe("test rules", function () {
    it("it should provide expected output when used as css framework", function () {
        reinit();
        /** Sample variables */
        var colors = {
            primary: 'blue',
            info: 'lightblue',
            success: 'green',
            warning: 'orange',
            danger: 'red',
            bgColor: 'white'
        };
        var fonts = {
            baseSize: '14pt'
        };
        // set html styles
        cssRule('html', {
            height: '100%'
        });
        // set default body styles
        cssRule('body', {
            fontSize: fonts.baseSize,
            margin: 0,
            padding: 0,
            height: '100%',
            backgroundColor: colors.bgColor,
            color: colors.primary
        });
        assert.equal(getStyles(), 'html{height:100%}body{background-color:white;color:blue;font-size:14pt;height:100%;margin:0;padding:0}');
    });
    it("support application style layout", function () {
        reinit();
        /** Use full window size for application */
        cssRule('html, body', {
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0
        });
        /** Use border box */
        cssRule('html', {
            boxSizing: 'border-box'
        });
        cssRule('*,*:before,*:after', {
            boxSizing: 'inherit',
        });
        assert.equal(getStyles(), 'html, body{height:100%;margin:0;padding:0;width:100%}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}');
    });
    it('support global media queries', function () {
        reinit();
        /** Save ink with a white background */
        cssRule('@media print', {
            $nest: {
                body: {
                    background: 'white'
                }
            }
        });
        assert.equal(getStyles(), '@media print{body{background:white}}');
    });
});
