'use strict';
import { Component, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Rx';

// import { CompleterCmp, CompleterData, CompleterService, CompleterItem, RemoteData } from '../src';
import { CustomData } from './custom-data';
import { Http } from '@angular/http';
import {CompleterCmp, CompleterData, CompleterItem, CompleterService, RemoteData} from 'ng2-completer';

@Component({
    selector: 'app-native-cmp',
    templateUrl: './native-cmp.html',
    styleUrls: ['./native-cmp.css']
})
export class NativeComponent {
  get quotes(): (
    { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string })[] {
    return this._quotes;
  }

  set quotes(value: (
    { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string }
    | { qt: string; nm: string })[]) {
    this._quotes = value;
  }
    // public countries = require('./res/data/countries.json');
    // public colors = require('./res/data/colors.json');
    private _quotes = [
        {
            qt: 'Always forgive your enemies; nothing annoys them so much.',
            nm: 'Friedrich Nietzsche'
        },
        {
            qt: 'Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.',
            nm: 'E.B. White'
        },
        {
            qt: 'Humor is perhaps a sense of intellectual perspective: an awareness that some things are really.',
            nm: 'Voltaire'
        },
        {
            qt: 'I think the next best thing to solving a problem is finding some humor in it.',
            nm: 'Frank Howard Clark'
        },
        {
            qt: 'Life is tough, and if you have the ability to laugh at it you have the ability to enjoy it.',
            nm: 'Salma Hayek'
        },
        {
            qt: 'Never be afraid to laugh at yourself. After all, you could be missing out on the joke of the century.',
            nm: 'Benjamin Franklin'
        },
        {
            qt: 'That is the saving grace of humor. If you fail no one is laughing at you.',
            nm: 'William Arthur Ward'
        },
        {
            qt: 'The best jokes are dangerous, and dangerous because they are in some way truthful.',
            nm: 'Kurt Vonnegut'
        },
        {
            qt: 'There is so much comedy on television. Does that cause comedy in the streets?',
            nm: 'Henry Ford'
        },
        {
            qt: 'You are not angry with people when you laugh at them. Humor teaches tolerance.',
            nm: 'W. Somerset Maugham'
        }
    ];
    public seinfeldEpisode: any;
    public color2 = 'lig';

    @ViewChild('openCloseExample') private openCloseExample: CompleterCmp;

    private dataService: CompleterData;
    private dataService2: CompleterData;
    private countryName2 = '';
    private quote = '';
    private dataRemote: CompleterData;
    private dataRemote2: RemoteData;
    private dataService3: CompleterData;
    private dataService4: CompleterData;
    private customData: CustomData;
    private isOpen = false;

    constructor(completerService: CompleterService, http: Http) {
        this.dataService = completerService.local(this.countries, 'name', 'name').imageField('flag');
        this.dataService2 = completerService.local(this._quotes, 'nm', 'nm').descriptionField('qt');
        this.dataRemote = completerService.remote(
            'https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?',
            'name',
            'name');
        this.dataRemote2 = completerService.remote(
            null,
            null,
            'Title');
        this.dataRemote2.urlFormater(term => {
            return `http://www.omdbapi.com/?s=${term}&type=movie`;
        });
        this.dataRemote2.dataField('Search');
        // For async local the source can also be HTTP request
        // let source = http.get('https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?')
      // .map((res: any) => res.json());
        const source = Observable.from([this.countries]).delay(3000);
        this.dataService3 = completerService.local(<Observable<any[]>>source, 'name', 'name');
        this.customData = new CustomData(http);
        this.dataService4 = completerService.local(this.colors, null, null);
    }

    public onCountrySelected(selected: CompleterItem) {
        if (selected) {
            this.countryName2 = selected.title;
        } else {
            this.countryName2 = '';
        }
    }

    public onQuoteSelected(selected: CompleterItem) {
        if (selected) {
            this.quote = selected.description;
        } else {
            this.quote = '';
        }
    }

    public onOpened(isOpen: boolean) {
        this.isOpen = isOpen;
    }

    public onToggle() {
        if (this.isOpen) {
            this.openCloseExample.close();
        } else {
            this.openCloseExample.open();
            this.openCloseExample.focus();
        }
    }

    public onFocus() {
        this.openCloseExample.focus();
    }

    countries = [{
      'name': 'Afghanistan',
      'code': 'AF',
      'flag': 'demo/res/img/af.png'
    }, {
      'name': 'Aland Islands',
      'code': 'AX',
      'flag': ''
    }, {
      'name': 'Albania',
      'code': 'AL',
      'flag': 'demo/res/img/al.png'
    }, {
      'name': 'Algeria',
      'code': 'DZ',
      'flag': 'demo/res/img/dz.png'
    }, {
      'name': 'American Samoa',
      'code': 'AS',
      'flag': 'demo/res/img/as.png'
    }, {
      'name': 'Andorra',
      'code': 'AD',
      'flag': ''
    }, {
      'name': 'Angola',
      'code': 'AO',
      'flag': 'demo/res/img/ao.png'
    }, {
      'name': 'Anguilla',
      'code': 'AI',
      'flag': 'demo/res/img/ai.png'
    }, {
      'name': 'Antarctica',
      'code': 'AQ',
      'flag': 'demo/res/img/aq.png'
    }, {
      'name': 'Antigua and Barbuda',
      'code': 'AG',
      'flag': 'demo/res/img/ag.png'
    }, {
      'name': 'Argentina',
      'code': 'AR',
      'flag': 'demo/res/img/ar.png'
    }, {
      'name': 'Armenia',
      'code': 'AM',
      'flag': 'demo/res/img/am.png'
    }, {
      'name': 'Aruba',
      'code': 'AW',
      'flag': 'demo/res/img/aw.png'
    }, {
      'name': 'Australia',
      'code': 'AU',
      'flag': 'demo/res/img/au.png'
    }, {
      'name': 'Austria',
      'code': 'AT',
      'flag': 'demo/res/img/at.png'
    }, {
      'name': 'Azerbaijan',
      'code': 'AZ',
      'flag': 'demo/res/img/az.png'
    }, {
      'name': 'Bahamas',
      'code': 'BS',
      'flag': 'demo/res/img/bs.png'
    }, {
      'name': 'Bahrain',
      'code': 'BH',
      'flag': 'demo/res/img/bh.png'
    }, {
      'name': 'Bangladesh',
      'code': 'BD',
      'flag': 'demo/res/img/bd.png'
    }, {
      'name': 'Barbados',
      'code': 'BB',
      'flag': 'demo/res/img/bb.png'
    }, {
      'name': 'Belarus',
      'code': 'BY',
      'flag': 'demo/res/img/by.png'
    }, {
      'name': 'Belgium',
      'code': 'BE',
      'flag': 'demo/res/img/be.png'
    }, {
      'name': 'Belize',
      'code': 'BZ',
      'flag': 'demo/res/img/bz.png'
    }, {
      'name': 'Benin',
      'code': 'BJ',
      'flag': 'demo/res/img/bj.png'
    }, {
      'name': 'Bermuda',
      'code': 'BM',
      'flag': 'demo/res/img/bm.png'
    }, {
      'name': 'Bhutan',
      'code': 'BT',
      'flag': 'demo/res/img/bt.png'
    }, {
      'name': 'Bolivia',
      'code': 'BO',
      'flag': 'demo/res/img/bo.png'
    }, {
      'name': 'Bosnia and Herzegovina',
      'code': 'BA',
      'flag': 'demo/res/img/ba.png'
    }, {
      'name': 'Botswana',
      'code': 'BW',
      'flag': 'demo/res/img/bw.png'
    }, {
      'name': 'Bouvet Island',
      'code': 'BV',
      'flag': ''
    }, {
      'name': 'Brazil',
      'code': 'BR',
      'flag': 'demo/res/img/br.png'
    }, {
      'name': 'British Indian Ocean Territory',
      'code': 'IO',
      'flag': ''
    }, {
      'name': 'Brunei Darussalam',
      'code': 'BN',
      'flag': 'demo/res/img/bn.png'
    }, {
      'name': 'Bulgaria',
      'code': 'BG',
      'flag': 'demo/res/img/bg.png'
    }, {
      'name': 'Burkina Faso',
      'code': 'BF',
      'flag': 'demo/res/img/bf.png'
    }, {
      'name': 'Burundi',
      'code': 'BI',
      'flag': 'demo/res/img/bi.png'
    }, {
      'name': 'Cambodia',
      'code': 'KH',
      'flag': 'demo/res/img/kh.png'
    }, {
      'name': 'Cameroon',
      'code': 'CM',
      'flag': 'demo/res/img/cm.png'
    }, {
      'name': 'Canada',
      'code': 'CA',
      'flag': 'demo/res/img/ca.png'
    }, {
      'name': 'Cape Verde',
      'code': 'CV',
      'flag': 'demo/res/img/cv.png'
    }, {
      'name': 'Cayman Islands',
      'code': 'KY',
      'flag': 'demo/res/img/ky.png'
    }, {
      'name': 'Central African Republic',
      'code': 'CF',
      'flag': 'demo/res/img/cf.png'
    }, {
      'name': 'Chad',
      'code': 'TD',
      'flag': 'demo/res/img/td.png'
    }, {
      'name': 'Chile',
      'code': 'CL',
      'flag': 'demo/res/img/cl.png'
    }, {
      'name': 'China',
      'code': 'CN',
      'flag': 'demo/res/img/cn.png'
    }, {
      'name': 'Christmas Island',
      'code': 'CX',
      'flag': ''
    }, {
      'name': 'Cocos (Keeling) Islands',
      'code': 'CC',
      'flag': ''
    }, {
      'name': 'Colombia',
      'code': 'CO',
      'flag': 'demo/res/img/co.png'
    }, {
      'name': 'Comoros',
      'code': 'KM',
      'flag': 'demo/res/img/km.png'
    }, {
      'name': 'Congo',
      'code': 'CG',
      'flag': 'demo/res/img/cg.png'
    }, {
      'name': 'Congo, The Democratic Republic of the',
      'code': 'CD',
      'flag': 'demo/res/img/cd.png'
    }, {
      'name': 'Cook Islands',
      'code': 'CK',
      'flag': 'demo/res/img/ck.png'
    }, {
      'name': 'Costa Rica',
      'code': 'CR',
      'flag': 'demo/res/img/cr.png'
    }, {
      'name': 'Cote D\'Ivoire',
      'code': 'CI',
      'flag': 'demo/res/img/ci.png'
    }, {
      'name': 'Croatia',
      'code': 'HR',
      'flag': 'demo/res/img/hr.png'
    }, {
      'name': 'Cuba',
      'code': 'CU',
      'flag': 'demo/res/img/cu.png'
    }, {
      'name': 'Cyprus',
      'code': 'CY',
      'flag': 'demo/res/img/cy.png'
    }, {
      'name': 'Czech Republic',
      'code': 'CZ',
      'flag': 'demo/res/img/cz.png'
    }, {
      'name': 'Denmark',
      'code': 'DK',
      'flag': 'demo/res/img/dk.png'
    }, {
      'name': 'Djibouti',
      'code': 'DJ',
      'flag': 'demo/res/img/dj.png'
    }, {
      'name': 'Dominica',
      'code': 'DM',
      'flag': 'demo/res/img/dm.png'
    }, {
      'name': 'Dominican Republic',
      'code': 'DO',
      'flag': 'demo/res/img/do.png'
    }, {
      'name': 'Ecuador',
      'code': 'EC',
      'flag': 'demo/res/img/ec.png'
    }, {
      'name': 'Egypt',
      'code': 'EG',
      'flag': 'demo/res/img/eg.png'
    }, {
      'name': 'El Salvador',
      'code': 'SV',
      'flag': 'demo/res/img/sv.png'
    }, {
      'name': 'Equatorial Guinea',
      'code': 'GQ',
      'flag': 'demo/res/img/gq.png'
    }, {
      'name': 'Eritrea',
      'code': 'ER',
      'flag': 'demo/res/img/er.png'
    }, {
      'name': 'Estonia',
      'code': 'EE',
      'flag': 'demo/res/img/ee.png'
    }, {
      'name': 'Ethiopia',
      'code': 'ET',
      'flag': 'demo/res/img/et.png'
    }, {
      'name': 'Falkland Islands (Malvinas)',
      'code': 'FK',
      'flag': ''
    }, {
      'name': 'Faroe Islands',
      'code': 'FO',
      'flag': 'demo/res/img/fo.png'
    }, {
      'name': 'Fiji',
      'code': 'FJ',
      'flag': 'demo/res/img/fj.png'
    }, {
      'name': 'Finland',
      'code': 'FI',
      'flag': 'demo/res/img/fi.png'
    }, {
      'name': 'France',
      'code': 'FR',
      'flag': 'demo/res/img/fr.png'
    }, {
      'name': 'French Guiana',
      'code': 'GF',
      'flag': ''
    }, {
      'name': 'French Polynesia',
      'code': 'PF',
      'flag': 'demo/res/img/pf.png'
    }, {
      'name': 'French Southern Territories',
      'code': 'TF',
      'flag': ''
    }, {
      'name': 'Gabon',
      'code': 'GA',
      'flag': 'demo/res/img/ga.png'
    }, {
      'name': 'Gambia',
      'code': 'GM',
      'flag': 'demo/res/img/gm.png'
    }, {
      'name': 'Georgia',
      'code': 'GE',
      'flag': 'demo/res/img/ge.png'
    }, {
      'name': 'Germany',
      'code': 'DE',
      'flag': 'demo/res/img/de.png'
    }, {
      'name': 'Ghana',
      'code': 'GH',
      'flag': 'demo/res/img/gh.png'
    }, {
      'name': 'Gibraltar',
      'code': 'GI',
      'flag': 'demo/res/img/gi.png'
    }, {
      'name': 'Greece',
      'code': 'GR',
      'flag': 'demo/res/img/gr.png'
    }, {
      'name': 'Greenland',
      'code': 'GL',
      'flag': 'demo/res/img/gl.png'
    }, {
      'name': 'Grenada',
      'code': 'GD',
      'flag': 'demo/res/img/gd.png'
    }, {
      'name': 'Guadeloupe',
      'code': 'GP',
      'flag': 'demo/res/img/gp.png'
    }, {
      'name': 'Guam',
      'code': 'GU',
      'flag': 'demo/res/img/gu.png'
    }, {
      'name': 'Guatemala',
      'code': 'GT',
      'flag': 'demo/res/img/gt.png'
    }, {
      'name': 'Guernsey',
      'code': 'GG',
      'flag': 'demo/res/img/gg.png'
    }, {
      'name': 'Guinea',
      'code': 'GN',
      'flag': 'demo/res/img/gn.png'
    }, {
      'name': 'Guinea-Bissau',
      'code': 'GW',
      'flag': 'demo/res/img/gw.png'
    }, {
      'name': 'Guyana',
      'code': 'GY',
      'flag': 'demo/res/img/gy.png'
    }, {
      'name': 'Haiti',
      'code': 'HT',
      'flag': 'demo/res/img/ht.png'
    }, {
      'name': 'Heard Island and Mcdonald Islands',
      'code': 'HM',
      'flag': ''
    }, {
      'name': 'Holy See (Vatican City State)',
      'code': 'VA',
      'flag': 'demo/res/img/va.png'
    }, {
      'name': 'Honduras',
      'code': 'HN',
      'flag': 'demo/res/img/hn.png'
    }, {
      'name': 'Hong Kong',
      'code': 'HK',
      'flag': 'demo/res/img/hk.png'
    }, {
      'name': 'Hungary',
      'code': 'HU',
      'flag': 'demo/res/img/hu.png'
    }, {
      'name': 'Iceland',
      'code': 'IS',
      'flag': 'demo/res/img/is.png'
    }, {
      'name': 'India',
      'code': 'IN',
      'flag': 'demo/res/img/in.png'
    }, {
      'name': 'Indonesia',
      'code': 'ID',
      'flag': 'demo/res/img/id.png'
    }, {
      'name': 'Iran, Islamic Republic Of',
      'code': 'IR',
      'flag': 'demo/res/img/ir.png'
    }, {
      'name': 'Iraq',
      'code': 'IQ',
      'flag': 'demo/res/img/iq.png'
    }, {
      'name': 'Ireland',
      'code': 'IE',
      'flag': 'demo/res/img/ie.png'
    }, {
      'name': 'Isle of Man',
      'code': 'IM',
      'flag': 'demo/res/img/im.png'
    }, {
      'name': 'Israel',
      'code': 'IL',
      'flag': 'demo/res/img/il.png'
    }, {
      'name': 'Italy',
      'code': 'IT',
      'flag': 'demo/res/img/it.png'
    }, {
      'name': 'Jamaica',
      'code': 'JM',
      'flag': 'demo/res/img/jm.png'
    }, {
      'name': 'Japan',
      'code': 'JP',
      'flag': 'demo/res/img/jp.png'
    }, {
      'name': 'Jersey',
      'code': 'JE',
      'flag': 'demo/res/img/je.png'
    }, {
      'name': 'Jordan',
      'code': 'JO',
      'flag': 'demo/res/img/jo.png'
    }, {
      'name': 'Kazakhstan',
      'code': 'KZ',
      'flag': 'demo/res/img/kz.png'
    }, {
      'name': 'Kenya',
      'code': 'KE',
      'flag': 'demo/res/img/ke.png'
    }, {
      'name': 'Kiribati',
      'code': 'KI',
      'flag': 'demo/res/img/ki.png'
    }, {
      'name': 'Korea, Democratic People\'S Republic of',
      'code': 'KP',
      'flag': 'demo/res/img/kp.png'
    }, {
      'name': 'Korea, Republic of',
      'code': 'KR',
      'flag': 'demo/res/img/kr.png'
    }, {
      'name': 'Kuwait',
      'code': 'KW',
      'flag': 'demo/res/img/kw.png'
    }, {
      'name': 'Kyrgyzstan',
      'code': 'KG',
      'flag': 'demo/res/img/kg.png'
    }, {
      'name': 'Lao People\'S Democratic Republic',
      'code': 'LA',
      'flag': 'demo/res/img/la.png'
    }, {
      'name': 'Latvia',
      'code': 'LV',
      'flag': 'demo/res/img/lv.png'
    }, {
      'name': 'Lebanon',
      'code': 'LB',
      'flag': 'demo/res/img/lb.png'
    }, {
      'name': 'Lesotho',
      'code': 'LS',
      'flag': 'demo/res/img/ls.png'
    }, {
      'name': 'Liberia',
      'code': 'LR',
      'flag': 'demo/res/img/lr.png'
    }, {
      'name': 'Libyan Arab Jamahiriya',
      'code': 'LY',
      'flag': 'demo/res/img/ly.png'
    }, {
      'name': 'Liechtenstein',
      'code': 'LI',
      'flag': 'demo/res/img/li.png'
    }, {
      'name': 'Lithuania',
      'code': 'LT',
      'flag': 'demo/res/img/lt.png'
    }, {
      'name': 'Luxembourg',
      'code': 'LU',
      'flag': 'demo/res/img/lu.png'
    }, {
      'name': 'Macao',
      'code': 'MO',
      'flag': 'demo/res/img/mo.png'
    }, {
      'name': 'Macedonia, The Former Yugoslav Republic of',
      'code': 'MK',
      'flag': 'demo/res/img/mk.png'
    }, {
      'name': 'Madagascar',
      'code': 'MG',
      'flag': 'demo/res/img/mg.png'
    }, {
      'name': 'Malawi',
      'code': 'MW',
      'flag': 'demo/res/img/mw.png'
    }, {
      'name': 'Malaysia',
      'code': 'MY',
      'flag': 'demo/res/img/my.png'
    }, {
      'name': 'Maldives',
      'code': 'MV',
      'flag': 'demo/res/img/mv.png'
    }, {
      'name': 'Mali',
      'code': 'ML',
      'flag': 'demo/res/img/ml.png'
    }, {
      'name': 'Malta',
      'code': 'MT',
      'flag': 'demo/res/img/mt.png'
    }, {
      'name': 'Marshall Islands',
      'code': 'MH',
      'flag': 'demo/res/img/mh.png'
    }, {
      'name': 'Martinique',
      'code': 'MQ',
      'flag': 'demo/res/img/mq.png'
    }, {
      'name': 'Mauritania',
      'code': 'MR',
      'flag': 'demo/res/img/mr.png'
    }, {
      'name': 'Mauritius',
      'code': 'MU',
      'flag': 'demo/res/img/mu.png'
    }, {
      'name': 'Mayotte',
      'code': 'YT',
      'flag': ''
    }, {
      'name': 'Mexico',
      'code': 'MX',
      'flag': 'demo/res/img/mx.png'
    }, {
      'name': 'Micronesia, Federated States of',
      'code': 'FM',
      'flag': 'demo/res/img/fm.png'
    }, {
      'name': 'Moldova, Republic of',
      'code': 'MD',
      'flag': 'demo/res/img/md.png'
    }, {
      'name': 'Monaco',
      'code': 'MC',
      'flag': 'demo/res/img/mc.png'
    }, {
      'name': 'Mongolia',
      'code': 'MN',
      'flag': 'demo/res/img/mn.png'
    }, {
      'name': 'Montserrat',
      'code': 'MS',
      'flag': 'demo/res/img/ms.png'
    }, {
      'name': 'Morocco',
      'code': 'MA',
      'flag': 'demo/res/img/ma.png'
    }, {
      'name': 'Mozambique',
      'code': 'MZ',
      'flag': 'demo/res/img/mz.png'
    }, {
      'name': 'Myanmar',
      'code': 'MM',
      'flag': 'demo/res/img/mm.png'
    }, {
      'name': 'Namibia',
      'code': 'NA',
      'flag': 'demo/res/img/na.png'
    }, {
      'name': 'Nauru',
      'code': 'NR',
      'flag': 'demo/res/img/nr.png'
    }, {
      'name': 'Nepal',
      'code': 'NP',
      'flag': 'demo/res/img/np.png'
    }, {
      'name': 'Netherlands',
      'code': 'NL',
      'flag': 'demo/res/img/nl.png'
    }, {
      'name': 'Netherlands Antilles',
      'code': 'AN',
      'flag': 'demo/res/img/an.png'
    }, {
      'name': 'New Caledonia',
      'code': 'NC',
      'flag': 'demo/res/img/nc.png'
    }, {
      'name': 'New Zealand',
      'code': 'NZ',
      'flag': 'demo/res/img/nz.png'
    }, {
      'name': 'Nicaragua',
      'code': 'NI',
      'flag': 'demo/res/img/ni.png'
    }, {
      'name': 'Niger',
      'code': 'NE',
      'flag': 'demo/res/img/ne.png'
    }, {
      'name': 'Nigeria',
      'code': 'NG',
      'flag': 'demo/res/img/ng.png'
    }, {
      'name': 'Niue',
      'code': 'NU',
      'flag': ''
    }, {
      'name': 'Norfolk Island',
      'code': 'NF',
      'flag': ''
    }, {
      'name': 'Northern Mariana Islands',
      'code': 'MP',
      'flag': ''
    }, {
      'name': 'Norway',
      'code': 'NO',
      'flag': 'demo/res/img/no.png'
    }, {
      'name': 'Oman',
      'code': 'OM',
      'flag': 'demo/res/img/om.png'
    }, {
      'name': 'Pakistan',
      'code': 'PK',
      'flag': 'demo/res/img/pk.png'
    }, {
      'name': 'Palau',
      'code': 'PW',
      'flag': 'demo/res/img/pw.png'
    }, {
      'name': 'Palestinian Territory, Occupied',
      'code': 'PS',
      'flag': 'demo/res/img/ps.png'
    }, {
      'name': 'Panama',
      'code': 'PA',
      'flag': 'demo/res/img/pa.png'
    }, {
      'name': 'Papua New Guinea',
      'code': 'PG',
      'flag': 'demo/res/img/pg.png'
    }, {
      'name': 'Paraguay',
      'code': 'PY',
      'flag': 'demo/res/img/py.png'
    }, {
      'name': 'Peru',
      'code': 'PE',
      'flag': 'demo/res/img/pe.png'
    }, {
      'name': 'Philippines',
      'code': 'PH',
      'flag': 'demo/res/img/ph.png'
    }, {
      'name': 'Pitcairn',
      'code': 'PN',
      'flag': ''
    }, {
      'name': 'Poland',
      'code': 'PL',
      'flag': 'demo/res/img/pl.png'
    }, {
      'name': 'Portugal',
      'code': 'PT',
      'flag': 'demo/res/img/pt.png'
    }, {
      'name': 'Puerto Rico',
      'code': 'PR',
      'flag': 'demo/res/img/pr.png'
    }, {
      'name': 'Qatar',
      'code': 'QA',
      'flag': 'demo/res/img/qa.png'
    }, {
      'name': 'Reunion',
      'code': 'RE',
      'flag': 'demo/res/img/re.png'
    }, {
      'name': 'Romania',
      'code': 'RO',
      'flag': 'demo/res/img/ro.png'
    }, {
      'name': 'Russian Federation',
      'code': 'RU',
      'flag': 'demo/res/img/ru.png'
    }, {
      'name': 'RWANDA',
      'code': 'RW',
      'flag': 'demo/res/img/rw.png'
    }, {
      'name': 'Saint Helena',
      'code': 'SH',
      'flag': ''
    }, {
      'name': 'Saint Kitts and Nevis',
      'code': 'KN',
      'flag': 'demo/res/img/kn.png'
    }, {
      'name': 'Saint Lucia',
      'code': 'LC',
      'flag': 'demo/res/img/lc.png'
    }, {
      'name': 'Saint Pierre and Miquelon',
      'code': 'PM',
      'flag': ''
    }, {
      'name': 'Saint Vincent and the Grenadines',
      'code': 'VC',
      'flag': 'demo/res/img/vc.png'
    }, {
      'name': 'Samoa',
      'code': 'WS',
      'flag': 'demo/res/img/ws.png'
    }, {
      'name': 'San Marino',
      'code': 'SM',
      'flag': 'demo/res/img/sm.png'
    }, {
      'name': 'Sao Tome and Principe',
      'code': 'ST',
      'flag': 'demo/res/img/st.png'
    }, {
      'name': 'Saudi Arabia',
      'code': 'SA',
      'flag': 'demo/res/img/sa.png'
    }, {
      'name': 'Senegal',
      'code': 'SN',
      'flag': 'demo/res/img/sn.png'
    }, {
      'name': 'Serbia and Montenegro',
      'code': 'CS',
      'flag': ''
    }, {
      'name': 'Seychelles',
      'code': 'SC',
      'flag': 'demo/res/img/sc.png'
    }, {
      'name': 'Sierra Leone',
      'code': 'SL',
      'flag': 'demo/res/img/sl.png'
    }, {
      'name': 'Singapore',
      'code': 'SG',
      'flag': 'demo/res/img/sg.png'
    }, {
      'name': 'Slovakia',
      'code': 'SK',
      'flag': 'demo/res/img/sk.png'
    }, {
      'name': 'Slovenia',
      'code': 'SI',
      'flag': 'demo/res/img/si.png'
    }, {
      'name': 'Solomon Islands',
      'code': 'SB',
      'flag': 'demo/res/img/sb.png'
    }, {
      'name': 'Somalia',
      'code': 'SO',
      'flag': 'demo/res/img/so.png'
    }, {
      'name': 'South Africa',
      'code': 'ZA',
      'flag': 'demo/res/img/za.png'
    }, {
      'name': 'South Georgia and the South Sandwich Islands',
      'code': 'GS',
      'flag': ''
    }, {
      'name': 'Spain',
      'code': 'ES',
      'flag': 'demo/res/img/es.png'
    }, {
      'name': 'Sri Lanka',
      'code': 'LK',
      'flag': 'demo/res/img/lk.png'
    }, {
      'name': 'Sudan',
      'code': 'SD',
      'flag': 'demo/res/img/sd.png'
    }, {
      'name': 'Suriname',
      'code': 'SR',
      'flag': 'demo/res/img/sr.png'
    }, {
      'name': 'Svalbard and Jan Mayen',
      'code': 'SJ',
      'flag': ''
    }, {
      'name': 'Swaziland',
      'code': 'SZ',
      'flag': 'demo/res/img/sz.png'
    }, {
      'name': 'Sweden',
      'code': 'SE',
      'flag': 'demo/res/img/se.png'
    }, {
      'name': 'Switzerland',
      'code': 'CH',
      'flag': 'demo/res/img/ch.png'
    }, {
      'name': 'Syrian Arab Republic',
      'code': 'SY',
      'flag': 'demo/res/img/sy.png'
    }, {
      'name': 'Taiwan, Province of China',
      'code': 'TW',
      'flag': 'demo/res/img/tw.png'
    }, {
      'name': 'Tajikistan',
      'code': 'TJ',
      'flag': 'demo/res/img/tj.png'
    }, {
      'name': 'Tanzania, United Republic of',
      'code': 'TZ',
      'flag': 'demo/res/img/tz.png'
    }, {
      'name': 'Thailand',
      'code': 'TH',
      'flag': 'demo/res/img/th.png'
    }, {
      'name': 'Timor-Leste',
      'code': 'TL',
      'flag': 'demo/res/img/tl.png'
    }, {
      'name': 'Togo',
      'code': 'TG',
      'flag': 'demo/res/img/tg.png'
    }, {
      'name': 'Tokelau',
      'code': 'TK',
      'flag': ''
    }, {
      'name': 'Tonga',
      'code': 'TO',
      'flag': 'demo/res/img/to.png'
    }, {
      'name': 'Trinidad and Tobago',
      'code': 'TT',
      'flag': 'demo/res/img/tt.png'
    }, {
      'name': 'Tunisia',
      'code': 'TN',
      'flag': 'demo/res/img/tn.png'
    }, {
      'name': 'Turkey',
      'code': 'TR',
      'flag': 'demo/res/img/tr.png'
    }, {
      'name': 'Turkmenistan',
      'code': 'TM',
      'flag': 'demo/res/img/tm.png'
    }, {
      'name': 'Turks and Caicos Islands',
      'code': 'TC',
      'flag': 'demo/res/img/tc.png'
    }, {
      'name': 'Tuvalu',
      'code': 'TV',
      'flag': 'demo/res/img/tv.png'
    }, {
      'name': 'Uganda',
      'code': 'UG',
      'flag': 'demo/res/img/ug.png'
    }, {
      'name': 'Ukraine',
      'code': 'UA',
      'flag': 'demo/res/img/ua.png'
    }, {
      'name': 'United Arab Emirates',
      'code': 'AE',
      'flag': 'demo/res/img/ae.png'
    }, {
      'name': 'United Kingdom',
      'code': 'GB',
      'flag': 'demo/res/img/gb.png'
    }, {
      'name': 'United States',
      'code': 'US',
      'flag': 'demo/res/img/us.png'
    }, {
      'name': 'United States Minor Outlying Islands',
      'code': 'UM',
      'flag': ''
    }, {
      'name': 'Uruguay',
      'code': 'UY',
      'flag': 'demo/res/img/uy.png'
    }, {
      'name': 'Uzbekistan',
      'code': 'UZ',
      'flag': 'demo/res/img/uz.png'
    }, {
      'name': 'Vanuatu',
      'code': 'VU',
      'flag': 'demo/res/img/vu.png'
    }, {
      'name': 'Venezuela',
      'code': 'VE',
      'flag': 'demo/res/img/ve.png'
    }, {
      'name': 'Vietnam',
      'code': 'VN',
      'flag': 'demo/res/img/vn.png'
    }, {
      'name': 'Virgin Islands, British',
      'code': 'VG',
      'flag': 'demo/res/img/vg.png'
    }, {
      'name': 'Virgin Islands, U.S.',
      'code': 'VI',
      'flag': 'demo/res/img/vi.png'
    }, {
      'name': 'Wallis and Futuna',
      'code': 'WF',
      'flag': ''
    }, {
      'name': 'Western Sahara',
      'code': 'EH',
      'flag': 'demo/res/img/eh.png'
    }, {
      'name': 'Yemen',
      'code': 'YE',
      'flag': 'demo/res/img/ye.png'
    }, {
      'name': 'Zambia',
      'code': 'ZM',
      'flag': 'demo/res/img/zm.png'
    }, {
      'name': 'Zimbabwe',
      'code': 'ZW',
      'flag': 'demo/res/img/zw.png'
    }];
    colors = [
      'aliceblue',
      'antiquewhite',
      'aqua',
      'aquamarine',
      'azure',
      'beige',
      'bisque',
      'black',
      'blanchedalmond',
      'blue',
      'blueviolet',
      'brown',
      'burlywood',
      'cadetblue',
      'chartreuse',
      'chocolate',
      'coral',
      'cornflowerblue',
      'cornsilk',
      'crimson',
      'cyan',
      'darkblue',
      'darkcyan',
      'darkgoldenrod',
      'darkgray',
      'darkgreen',
      'darkgrey',
      'darkkhaki',
      'darkmagenta',
      'darkolivegreen',
      'darkorange',
      'darkorchid',
      'darkred',
      'darksalmon',
      'darkseagreen',
      'darkslateblue',
      'darkslategray',
      'darkslategrey',
      'darkturquoise',
      'darkviolet',
      'deeppink',
      'deepskyblue',
      'dimgray',
      'dimgrey',
      'dodgerblue',
      'firebrick',
      'floralwhite',
      'forestgreen',
      'fuchsia',
      'gainsboro',
      'ghostwhite',
      'gold',
      'goldenrod',
      'gray',
      'green',
      'greenyellow',
      'grey',
      'honeydew',
      'hotpink',
      'indianred',
      'indigo',
      'ivory',
      'khaki',
      'lavender',
      'lavenderblush',
      'lawngreen',
      'lemonchiffon',
      'lightblue',
      'lightcoral',
      'lightcyan',
      'lightgoldenrodyellow',
      'lightgray',
      'lightgreen',
      'lightgrey',
      'lightpink',
      'lightsalmon',
      'lightseagreen',
      'lightskyblue',
      'lightslategray',
      'lightslategrey',
      'lightsteelblue',
      'lightyellow',
      'lime',
      'limegreen',
      'linen',
      'magenta',
      'maroon',
      'mediumaquamarine',
      'mediumblue',
      'mediumorchid',
      'mediumpurple',
      'mediumseagreen',
      'mediumslateblue',
      'mediumspringgreen',
      'mediumturquoise',
      'mediumvioletred',
      'midnightblue',
      'mintcream',
      'mistyrose',
      'moccasin',
      'navajowhite',
      'navy',
      'oldlace',
      'olive',
      'olivedrab',
      'orange',
      'orangered',
      'orchid',
      'palegoldenrod',
      'palegreen',
      'paleturquoise',
      'palevioletred',
      'papayawhip',
      'peachpuff',
      'peru',
      'pink',
      'plum',
      'powderblue',
      'purple',
      'rebeccapurple',
      'red',
      'rosybrown',
      'royalblue',
      'saddlebrown',
      'salmon',
      'sandybrown',
      'seagreen',
      'seashell',
      'sienna',
      'silver',
      'skyblue',
      'slateblue',
      'slategray',
      'slategrey',
      'snow',
      'springgreen',
      'steelblue',
      'tan',
      'teal',
      'thistle',
      'tomato',
      'turquoise',
      'violet',
      'wheat',
      'white',
      'whitesmoke',
      'yellow',
      'yellowgreen'
    ];
}
