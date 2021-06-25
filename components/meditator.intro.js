import { useState, useEffect } from 'react';
import { SectionCard } from './SectionCard';
import { SectionCardContent } from './SectionCardContent';
import { SectionCardIcon } from './SectionCardIcon';
import { SectionIntroTitle } from './SectionIntroTitle';
import { BiBrain } from 'react-icons/bi'

import Button from './Button'

const Mindfulness = () => (<svg className="h-6" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m497 482h-71.048c31.202-15.862 53.915-40.103 53.915-77.15 0-73.706-89.443-96.719-157.083-103.899 70.332-29.195 96.939-72.672 84.69-118.394-8.508-31.752-32.635-52.956-71.319-59.879 12.861-13.077 19.791-28.898 19.791-45.717-.001-50.827-57.235-76.961-102.637-76.961-45.065 0-102.635 25.861-102.635 76.961 0 30.48 20.61 52.09 46.904 64.504-80.671 29.102-111.423 75.194-98.425 123.711 4.868 18.169 15.76 34.317 33.457 45.653-52.37 13.312-100.477 40.104-100.477 94.021 0 37.051 22.604 61.291 53.677 77.15h-70.81c-8.284 0-15 6.716-15 15s6.716 15 15 15h482c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-316.326-405.039c0-25.456 33.263-46.961 72.635-46.961s72.636 21.506 72.636 46.961c0 25.459-33.263 46.969-72.636 46.969s-72.635-21.509-72.635-46.969zm-52.544 180.451c-11.682-43.603 36.535-77.431 108.27-96.65 45.029-12.065 127.525-24.811 142.095 29.56 11.748 43.852-37.077 77.574-108.27 96.649-121.495 32.561-138.833-17.386-142.095-29.559zm-65.997 147.438c0-48.309 72.474-77.15 193.867-77.15s193.867 28.841 193.867 77.15-72.474 77.15-193.867 77.15-193.867-28.841-193.867-77.15z" /></svg>)

const Equanimity = () => (<svg className="h-8" xmlns="http://www.w3.org/2000/svg" height="512" width="512" viewBox="0 0 140 140" version="1.1" > <g transform="translate(-193.41417,-350.53782)"> <path d="m277.12,370.99c-0.003-0.009,0.16318,0.0204,0.48546,0.0861,0.32227,0.0657,0.51636,0.0848,1.1344,0.25197,0.61828,0.16643,1.121,0.2436,2.0044,0.53475,0.88346,0.29122,1.6538,0.49221,2.771,0.92691,1.1171,0.4347,2.1071,0.81687,3.4256,1.4098,1.3185,0.59291,2.2829,1.0426,3.7304,1.8778,1.4475,0.83521,2.5994,1.4811,4.1225,2.5748,1.5232,1.0938,2.7727,2.0128,4.3186,3.3711,1.5458,1.3583,2.7945,2.5973,4.3116,4.2165s2.6179,3.0294,3.9668,4.964c1.349,1.9346,2.4501,3.5966,3.562,5.8095s2.1037,4.1494,2.9174,6.5904c0.81368,2.4411,1.4776,4.7573,2.0682,7.3389,0.59066,2.5816,0.79903,5.0121,1.009,7.7059,0.21002,2.6938,0.0594,5.2437-0.13667,7.9708-0.19604,2.727-0.72953,5.3248-1.3371,8.0015-0.60755,2.6767-1.5153,5.2522-2.5163,7.7963-1.001,2.5442-2.2876,5.0164-3.6418,7.3542-1.3543,2.3378-3.001,4.6252-4.6513,6.696s-3.6043,4.1113-5.4823,5.8698-4.0673,3.5182-6.0982,4.9345c-2.031,1.4164-4.3783,2.8932-6.4847,3.9527-2.1064,1.0596-4.4484,2.1041-6.516,2.9076-2.0676,0.80347-4.5709,1.5783-6.5756,2.0396-2.0046,0.46135-4.2903,0.92586-6.1492,1.1669-1.8588,0.24099-4.0268,0.44599-5.6962,0.49729-1.6695,0.0513-3.4462,0.0317-4.8907,0.005-1.4444-0.0263-3.2219-0.23011-4.4112-0.37009-1.1894-0.14001-2.4878-0.338-3.4042-0.4908-0.91638-0.15284-1.9402-0.36099-2.565-0.49474-0.62487-0.13374-1.1032-0.23372-1.4245-0.29746-0.3213-0.0637-0.48558-0.0913-0.48238-0.0802,0.006,0.0178,0.0142,0.0354,0.0228,0.053,0.009,0.0173,0.0195,0.0346,0.0315,0.0515,0.0115,0.017,0.0251,0.0335,0.0393,0.0501,0.0143,0.0163,0.03,0.0327,0.0466,0.0488,0.0168,0.0163,0.0344,0.0321,0.0535,0.0477,0.019,0.0158,0.0388,0.0313,0.0596,0.0466,0.021,0.0153,0.0426,0.0307,0.0652,0.0456,0.0226,0.015,0.0461,0.0299,0.0702,0.0449,0.0245,0.0135,0.049,0.0294,0.0746,0.044,0.0258,0.0131,0.0515,0.0291,0.0784,0.0433,0.0271,0.0127,0.0538,0.0286,0.0815,0.0428,0.0279,0.0129,0.0557,0.0283,0.0841,0.0423,0.0287,0.0123,0.0571,0.028,0.0861,0.0419,0.0293,0.0125,0.0582,0.0277,0.0875,0.0419,0.0296,0.0126,0.0589,0.0278,0.0882,0.0415,0.0297,0.0126,0.059,0.0278,0.0884,0.0416,0.0297,0.0126,0.059,0.0276,0.088,0.0416,0.0295,0.0125,0.0583,0.0277,0.087,0.0416,0.029,0.0124,0.0574,0.0278,0.0855,0.0418,0.0285,0.0123,0.0559,0.0281,0.0832,0.0421,0.0276,0.0128,0.0541,0.0284,0.0804,0.0428,0.0267,0.0126,0.0519,0.0288,0.0771,0.043,0.0254,0.0131,0.0493,0.029,0.073,0.0439,0.024,0.0134,0.0464,0.0296,0.0685,0.0445,0.022,0.0149,0.0431,0.0302,0.0633,0.0455s0.0394,0.0307,0.0574,0.0464c0.0181,0.0158,0.0351,0.0314,0.0512,0.0473,0.0158,0.0161,0.0306,0.0321,0.0441,0.0484,0.0134,0.0162,0.0257,0.0328,0.0365,0.0496,0.0107,0.0168,0.0202,0.0338,0.0284,0.051,0.008,0.0175,0.0147,0.0346,0.0195,0.0524,0.005,0.0176,0.009,0.0356,0.01,0.0541-0.003,0.0167,0.13827,0.0682,0.417,0.15266,0.27866,0.0846,1.0042,0.25075,1.5539,0.37111,0.54969,0.12057,1.5274,0.34707,2.3332,0.474,0.80577,0.1269,2.0285,0.34704,3.073,0.45315,1.0446,0.10605,2.4968,0.25836,3.7608,0.3195,1.264,0.0611,2.9229,0.0901,4.3852,0.0853,1.4622-0.005,3.576-0.16328,5.2075-0.33272s3.8662-0.51057,5.6292-0.87195c1.7629-0.36132,4.0723-0.95319,5.926-1.5259,1.8537-0.57264,4.1789-1.4649,6.0812-2.2605,1.9023-0.79562,4.4063-2.0635,6.2636-3.1761s4.0621-2.5664,5.8723-3.9016c1.8102-1.3353,4.0175-3.2158,5.6632-4.8439s3.4712-3.6516,4.9807-5.4681,3.1395-4.2469,4.3791-6.2901c1.2397-2.0432,2.6149-4.598,3.5381-6.8126,0.92321-2.2145,1.8559-4.7511,2.5481-7.0385,0.69249-2.2874,1.3176-5.0128,1.6524-7.3508,0.33474-2.3379,0.57759-4.9104,0.67449-7.2232,0.0969-2.3129,0.007-4.9177-0.23313-7.1542-0.23958-2.2365-0.61149-4.5972-1.0506-6.7171-0.43917-2.1199-1.0546-4.3849-1.7593-6.3226-0.70466-1.9377-1.4675-3.9236-2.3009-5.6754-0.83347-1.7518-1.7521-3.4991-2.6756-5.0435-0.9235-1.5443-1.916-3.0503-2.8871-4.3719-0.97115-1.3216-1.9533-2.6044-2.9268-3.6952-0.97352-1.0908-1.9201-2.108-2.8058-3.0114-0.8857-0.90346-1.7405-1.7358-2.5431-2.4123-0.8026-0.67648-1.5024-1.3135-2.149-1.8102-0.64656-0.49677-1.1953-0.92089-1.6386-1.2669-0.44331-0.34605-0.7985-0.59773-1.0323-0.77053-0.23381-0.1728-0.35087-0.26733-0.34291-0.27898,0.007-0.0118,0.14064,0.0625,0.39074,0.21631,0.25006,0.1539,0.62655,0.39279,1.0875,0.7245,0.46095,0.33168,1.0275,0.7434,1.6921,1.2294,0.6646,0.48597,1.4408,1.1034,2.2285,1.8126,0.78772,0.70911,1.6941,1.5039,2.5989,2.4057,0.90485,0.90179,1.8775,1.9349,2.87,3.0277,0.99248,1.0928,2.004,2.4173,2.9933,3.7453,0.98936,1.328,2.0044,2.8856,2.9447,4.4402,0.94036,1.5546,1.8726,3.3621,2.7211,5.1277,0.84849,1.7656,1.7342,3.8737,2.3568,5.8603,0.62269,1.9866,1.285,4.2313,1.7335,6.3708,0.44845,2.1395,0.79312,4.5748,1.0391,6.8326,0.24601,2.2578,0.2681,4.9618,0.17353,7.2974-0.0946,2.3355-0.39866,4.977-0.73407,7.3381-0.33543,2.3611-1.0757,5.1656-1.7726,7.476-0.69703,2.3104-1.7025,5.108-2.7444,7.2953s-2.3636,4.6685-3.614,6.7328c-1.2503,2.0642-3.0413,4.5061-4.5643,6.3416s-3.5566,4.0842-5.2946,5.6478-3.867,3.3386-5.6936,4.6891-4.3253,2.9563-6.251,3.9919c-1.9257,1.0357-4.312,2.1982-6.2318,3.0052-1.9198,0.80705-4.3533,1.6221-6.2242,2.2051-1.8709,0.58294-4.2826,1.0824-6.0622,1.4532-1.7796,0.37077-4.1089,0.60483-5.7563,0.78311-1.6474,0.17827-3.8463,0.21587-5.3236,0.22941-1.4772,0.0136-3.5152-0.0587-4.7886-0.1742-1.2735-0.11546-2.779-0.26924-3.8297-0.41745s-2.327-0.36017-3.137-0.51557c-0.80995-0.15538-1.8448-0.36254-2.3981-0.49679-0.5533-0.1342-0.97811-0.23638-1.2653-0.30387-0.2872-0.0677-0.43676-0.10088-0.43954-0.0973-0.0101,0.0143,0.17206,0.0796,0.53713,0.19307,0.36512,0.11337,1.2553,0.39165,1.9817,0.56197,0.72636,0.17025,1.9675,0.49504,3.0362,0.68121,1.0687,0.1862,2.6484,0.46762,4.0372,0.63333,1.3887,0.1657,3.6285,0.41278,5.3155,0.44111,1.687,0.0283,4.1998,0.0795,6.1438-0.083,1.944-0.16253,4.6744-0.43567,6.8275-0.83207,2.1531-0.39643,5.0198-1.0966,7.3293-1.7594,2.3095-0.66277,5.5104-1.96,7.8724-3.0253,2.3619-1.0653,5.4879-2.8509,7.8109-4.3306,2.323-1.4798,5.2411-3.8047,7.4323-5.6927,2.1912-1.8881,5.0267-4.9087,6.8809-7.2741s4.0701-5.6054,5.5964-8.2961,3.3675-6.5546,4.3435-9.5564c0.97591-3.0017,2.0747-6.8541,2.5919-10.006,0.51722-3.1521,0.84166-7.1313,0.88127-10.338,0.0397-3.2068-0.36892-7.3907-0.95421-10.531-0.58532-3.1406-1.6274-6.8763-2.6477-9.8641-1.02-2.9879-2.7729-6.6084-4.3104-9.2942s-3.6573-5.7044-5.5085-8.0742-4.4838-5.0826-6.6706-6.9789-4.8858-4.0035-7.2115-5.4838c-2.3256-1.4802-5.1654-3.0773-7.5371-4.1278-2.3716-1.0505-5.0698-2.0455-7.3562-2.7942-2.2864-0.74881-5.0675-1.3539-7.2305-1.7153-2.163-0.36138-4.5673-0.63333-6.5178-0.76267-1.9506-0.12936-4.107-0.12197-5.7978-0.0683-1.6909,0.0536-3.5521,0.2118-4.9442,0.39049-1.392,0.17869-2.7792,0.40208-3.8532,0.58917-1.074,0.18707-2.1227,0.43572-2.8575,0.59467-0.7349,0.15864-1.4353,0.34654-1.8129,0.43816-0.37764,0.0914-0.57492,0.12959-0.57984,0.11103-0.005-0.0185,0.18291-0.0919,0.55145-0.21648,0.36849-0.12467,1.0684-0.34582,1.7962-0.53478,0.72782-0.1888,1.7823-0.46841,2.851-0.68232,1.0687-0.21392,2.4674-0.46512,3.8555-0.66771,1.3881-0.20262,3.2864-0.38667,4.9754-0.46149,1.689-0.0748,3.8912-0.10172,5.8416,0.009,1.9503,0.11075,4.4076,0.37056,6.5715,0.71584,2.1638,0.3453,5.0315,0.95423,7.3203,1.6891,2.2888,0.73489,5.0482,1.7376,7.4224,2.7762,2.3742,1.0387,5.305,2.6675,7.6337,4.1377,2.3286,1.4702,5.1148,3.6243,7.3049,5.512,2.1901,1.8878,4.9266,4.686,6.7814,7.0486s4.043,5.4569,5.5841,8.1362c1.5411,2.6794,3.1414,6.226,4.307,9.1559,1.1655,2.9299,2.1938,7.0622,2.7832,10.198,0.58937,3.1354,1.0332,7.4655,0.99827,10.668-0.0349,3.2021-0.34912,7.2971-0.86099,10.445s-1.6162,7.1197-2.586,10.118c-0.96985,2.9982-2.8461,7.0215-4.3652,9.71s-3.7778,6.0428-5.6239,8.4072-4.6088,5.1979-6.6973,7.1902-5.4244,4.5398-7.7378,6.0228-5.5287,3.3602-7.8808,4.4312-5.3457,2.2312-7.6107,3.0122c-2.265,0.78102-5.588,1.5368-7.7318,1.9444-2.1438,0.40761-4.9582,0.73246-6.8937,0.90906-1.9354,0.17662-4.5421,0.17349-6.2217,0.16238-1.6796-0.0112-4.0238-0.21503-5.407-0.3603-1.3832-0.14529-3.0177-0.39597-4.0822-0.55866-1.0645-0.16268-2.3659-0.45627-3.0897-0.59951-0.72383-0.14333-1.6808-0.38964-2.0452-0.47317-0.36449-0.0834-0.54729-0.11721-0.53642-0.0977,0.0216,0.0383,0.25995,0.13799,0.70175,0.29483,0.44171,0.15703,1.5149,0.46695,2.3623,0.69169,0.84723,0.22546,2.3214,0.56797,3.5534,0.8157,1.2321,0.24771,3.5224,0.63175,5.1241,0.78038,1.6017,0.14861,4.2491,0.3763,6.1812,0.35647,1.9321-0.0199,4.8878-0.11456,7.1018-0.36087,2.214-0.24612,5.8374-0.78706,8.2498-1.4234,2.4123-0.63651,5.7252-1.6722,8.2887-2.6221,2.5633-0.95048,6.6527-2.9487,9.168-4.4797,2.5149-1.5317,6.065-3.9896,8.4739-5.9836s5.9456-5.4464,8.0197-7.9892c2.0742-2.5427,4.7451-6.3658,6.4823-9.2971,1.7372-2.9314,3.8426-7.738,4.9884-11.051,1.1458-3.3127,2.4132-8.486,2.8788-12.03,0.46569-3.5444,0.74788-8.8821,0.50011-12.49-0.24769-3.6078-1.0186-8.8762-1.9634-12.381-0.94517-3.5042-2.7362-8.4784-4.3247-11.725-1.5886-3.2465-4.3034-7.7338-6.4542-10.584-2.1509-2.8506-5.6478-6.6974-8.2539-9.0328s-6.7031-5.4391-9.6317-7.1657c-2.9285-1.7266-7.078-3.7401-10.114-4.9586-3.0363-1.2184-7.7544-2.554-10.82-3.1092-3.0655-0.55526-7.3155-1.0516-10.245-1.1358-2.9297-0.0842-6.9774,0.13476-9.6762,0.45819-2.6988,0.32344-6.4205,1.0934-8.8113,1.742-2.3908,0.64853-5.7302,1.7764-7.7563,2.6541-2.0262,0.87756-4.5873,2.1032-6.2601,3.0262-1.6728,0.92311-3.8177,2.2567-5.126,3.1513-1.3083,0.89472-3.0785,2.1793-4.0233,2.9685-0.94485,0.78915-2.0465,1.7064-2.671,2.2815-0.62464,0.5749-1.1032,1.0159-1.4258,1.313-0.32251,0.29723-0.7494,0.73837-0.7494,0.73837l3.1233-2.9052,3.0101-2.4452,3.1472-2.2657,3.6106-2.2701,3.418-1.8358,3.5197-1.6351,3.6104-1.429,4.0797-1.2947,3.7736-0.94475,3.8255-0.72295,4.274-0.5101,3.8978-0.20992,3.9069,0.0214,4.3219,0.30263,3.8792,0.54336,3.8426,0.7731,3.7924,0.99978,3.7281,1.2215,4.0367,1.6415,3.5354,1.7039,3.4274,1.9107,3.6582,2.3596,3.1393,2.3491,2.994,2.5294,2.8394,2.7004,2.9344,3.1999,2.4569,3.0492,2.2755,3.1866,2.2839,3.6903,1.8398,3.4583,1.6372,3.5601,1.5598,4.0616,1.1587,3.7502,0.93909,3.8141,0.71529,3.8659,0.48874,4.354,0.19623,3.9373-0.0371,3.9459-0.3401,4.3979-0.56504,3.916-0.79671,3.8783-1.0252,3.8269-1.4277,4.1989-1.5215,3.6611-1.7356,3.564-1.9436,3.4542-2.4287,3.7065-2.385,3.1607-2.5662,3.0134-3.0743,3.1758-2.94,2.6447-3.0882,2.4686-3.226,2.2853-3.7701,2.2978-3.4985,1.8438-3.6005,1.6394-4.1427,1.5582-3.7908,1.155-3.8546,0.93343-4.3852,0.75915-3.9552,0.41587-3.9768,0.18249-3.9849-0.0528-4.4738-0.37759s11.286,1.5335,15.363,1.067c2.818-0.32245,7.4575-1.2377,10.73-2.1076,3.273-0.87001,9.1469-3.1469,12.548-5.0011,3.4006-1.8543,8.6082-5.2358,11.919-7.9742,3.3106-2.7384,8.2107-7.992,10.974-11.739,2.7635-3.7469,6.8933-11.159,8.6883-16.342,1.795-5.1821,3.7571-14.12,3.942-20.121,0.18495-6.0005-0.94318-15.882-2.8455-21.797-1.9023-5.9148-6.1954-14.83-9.8765-19.711-3.681-4.8812-10.718-12.013-15.824-15.377-5.1059-3.3636-13.339-7.3323-18.446-8.8012-5.107-1.4688-12.71-2.6176-16.585-2.7262-3.8752-0.10859-8.4408,0.23846-8.7661,0.27822-0.32528,0.0401-2.3446,0.23911-4.5709,0.58352-2.2262,0.34478-6.605,1.3473-9.7103,2.2857-3.1053,0.93843-8.3354,3.1888-11.771,4.9814-3.4352,1.7926-8.918,5.6062-11.983,8.2742-3.0649,2.668-7.3701,7.3617-9.9879,10.723-2.6178,3.361-6.0594,9.6481-7.7745,13.548-1.715,3.9-3.798,10.78-4.4665,14.789-0.66861,4.0087-1.1746,10.312-1.0692,13.982,0.10541,3.6697,0.84317,9.643,1.6054,13.029,0.76218,3.3859,2.5148,8.9366,3.7928,11.866,1.2779,2.9297,3.5626,7.3019,5.0589,9.7252s4.2565,6.1156,5.8123,7.9771,4.0362,4.3873,5.4106,5.7426c5.6852,3.9881,4.2897,2.3216,9.5145,4.3202,7.5889,2.9813,17.616-0.24092,19.336-3.5808,1.7209-3.3399-0.50799-12.354-9.6623-21.468-1.3847-1.2713-1.979-1.7497-3.5755-3.5234s-1.9926-2.18-3.5708-4.5328c-1.5782-2.3527-2.0662-3.2155-3.4672-6.1145-1.4009-2.899-1.5719-3.5473-2.4883-6.9733-0.91644-3.426-1.0219-4.3462-1.2887-8.15-0.26686-3.8039-0.35637-4.4696,0.39429-8.8103,0.75068-4.3407,0.76421-5.5188,2.6991-9.8673s2.4773-5.7482,5.481-9.5897,4.163-5.003,7.8955-7.9502c3.7324-2.9472,4.7127-3.6356,9.0586-5.4091s5.7372-2.4071,9.7303-3.0121,5.3981-0.8679,8.3044-0.74648c2.9063,0.12144,3.9779,0.17672,4.2132,0.20649,0.23528,0.0298,1.0724,0.0273,3.2484,0.39871,2.176,0.37142,3.5111,0.47075,6.7628,1.5461,3.2517,1.0753,5.0458,1.6615,8.783,3.7974s5.639,3.4622,9.0978,6.7716,5.2147,5.2805,7.8006,9.7903c2.586,4.5098,4.0398,7.4296,5.2845,12.675,1.2448,5.2452,1.8175,8.8222,1.48,14.176-0.33749,5.3533-1.094,9.2812-2.6784,14.148-1.5844,4.8664-3.3532,8.3224-6.1966,12.355-2.8434,4.0325-5.5919,7.068-9.0826,10.095-3.4908,3.0266-6.8433,5.1387-10.556,7.051,0.24439-0.0343,0.57637-0.11468,0.99076-0.23845,0.41438-0.12377,0.8491-0.2745,1.4126-0.50951,0.56352-0.23497,1.1612-0.46561,1.854-0.81976,0.69285-0.35421,1.4231-0.69367,2.2254-1.173,0.80233-0.47934,1.633-0.9513,2.5246-1.5601,0.89209-0.60824,1.789-1.2319,2.751-1.9713,0.96201-0.7394,1.8908-1.5278,2.9037-2.3982,1.0128-0.87037,1.8962-1.7831,2.8913-2.8321,0.99518-1.049,1.9152-2.0505,2.8591-3.2736,0.94387-1.2231,1.8326-2.449,2.7606-3.7919,0.92801-1.3429,1.6416-2.6725,2.4644-4.1694,0.82279-1.4969,1.4507-2.9208,2.1408-4.5532,0.69012-1.6324,1.2056-3.1381,1.7397-4.8831,0.53405-1.745,0.91845-3.3138,1.2785-5.1446,0.36036-1.8308,0.58736-3.4426,0.76199-5.3299,0.17463-1.8872,0.22207-3.5168,0.20539-5.4298-0.0167-1.913-0.15985-3.5291-0.36755-5.437-0.2077-1.908-0.54079-3.4773-0.93382-5.3503-0.39305-1.873-0.90501-3.363-1.4726-5.1729-0.5679-1.8098-1.0966-3.0496-1.9059-4.7333-0.80939-1.6837-1.4384-3.0043-2.3839-4.5686-0.94546-1.5643-1.6724-2.7521-2.7316-4.1776-1.0593-1.4254-1.8441-2.474-2.9922-3.7446s-1.948-2.1849-3.1574-3.2886-2.2329-1.9878-3.4271-2.9769c-1.1942-0.98907-2.0323-1.5322-3.2354-2.3456s-1.9212-1.2944-3.1014-1.9339c-1.1802-0.63949-2.0634-1.1179-3.1634-1.6473-1.1-0.52944-1.9011-0.8697-2.9024-1.2945-1.0012-0.42487-1.6909-0.65248-2.575-0.98034-0.88406-0.32787-1.4356-0.47412-2.1844-0.7149-0.74876-0.24101-1.1396-0.34246-1.7356-0.50831l0.00009-0.00052" /> </g> </svg >)
const Focus = () => <BiBrain size={32} />

const Content = () => {
    return <section className="">
        <div className="max-w-6xl px-5 pt-24 pb-12 mx-auto">
            <SectionIntroTitle
                title="Mindfulness"
                content="Meditation started as a journey to gain focus and concentration. But it soon proved to be an inner discovery journey. 
                    <br />
                    "
            />
            <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-green-100"
                        text="text-green-500"
                        SVG={Mindfulness} />
                    <SectionCardContent
                        title="Mindfulness"
                        content="Here. Now! Mindfulness is the ability of keeping the mind engaged with whatever arises in the present moment, without getting too attached or fascinated by it." />
                </SectionCard>
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-blue-100"
                        text="text-blue-500"
                        SVG={Equanimity} />
                    <SectionCardContent
                        title="Equanimity"
                        content="The ability to keep calm and composure in the face of great adversity! Equanimity develops as a result of the practice and offers a different quality of life." />
                </SectionCard>
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-yellow-100"
                        text="text-yellow-500"
                        SVG={Focus} />
                    <SectionCardContent
                        title="Focus"
                        content="Concentration is an advanced practice that allowed the meditator to sit for longer. It is similar to the state of flow. I personally feel it most when I stream or scalp." />
                </SectionCard>
            </div >
        </div >
    </section >
}

export default Content