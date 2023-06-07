export function getRegion(postCode: string): string {
    // Find the key in postCodes where the postCode parameter is in the array
    const region = Object.keys(postCodes).find((key) => postCodes[key].includes(postCode))

    return region || 'notFound';
}

interface PostCodeRegionsType {
    [key: string]: string[];
}

const postCodes:PostCodeRegionsType = {
  northIslandRural: [
    '0792',
    '0793',
    '0794',
    '4771',
    '3979',
    '4884',
    '3078',
    '0486',
    '2675',
    '0496',
    '4894',
    '3493',
    '3494',
    '3495',
    '3496',
    '5791',
    '5792',
    '3581',
    '3582',
    '3583',
    '3584',
    '4971',
    '4972',
    '4973',
    '4975',
    '4976',
    '4977',
    '4978',
    '4970',
    '4979',
    '0371',
    '0372',
    '0373',
    '0374',
    '0376',
    '0377',
    '0370',
    '0379',
    '2577',
    '2578',
    '2579',
    '4994',
    '4996',
    '4993',
    '4995',
    '4398',
    '4399',
    '5771',
    '5772',
    '5773',
    '4775',
    '4777',
    '4779',
    '4891',
    '4893',
    '4071',
    '4072',
    '4073',
    '0991',
    '5794',
    '3281',
    '3282',
    '3283',
    '3284',
    '3285',
    '3286',
    '3287',
    '3288',
    '3289',
    '3290',
    '3293',
    '4171',
    '4172',
    '4174',
    '4175',
    '4179',
    '4180',
    '4178',
    '4294',
    '4295',
    '4671',
    '4672',
    '4673',
    '4674',
    '4675',
    '4678',
    '4679',
    '0874',
    '0875',
    '0781',
    '0782',
    '3579',
    '0181',
    '0182',
    '0184',
    '2571',
    '4781',
    '4782',
    '4783',
    '4784',
    '4785',
    '4786',
    '3771',
    '3772',
    '4386',
    '4387',
    '4388',
    '4389',
    '4390',
    '0478',
    '0479',
    '0474',
    '0472',
    '0473',
    '0481',
    '0482',
    '0483',
    '0484',
    '0573',
    '0185',
    '6972',
    '3177',
    '3178',
    '3170',
    '3181',
    '0871',
    '0873',
    '0281',
    '0282',
    '0283',
    '3889',
    '0294',
    '0295',
    '0293',
    '4774',
    '0491',
    '0492',
    '4188',
    '0891',
    '0892',
    '5571',
    '5574',
    '5575',
    '5572',
    '5570',
    '5573',
    '3978',
    '3492',
    '4797',
    '0494',
    '2576',
    '4078',
    '4787',
    '4788',
    '4789',
    '5881',
    '5882',
    '5883',
    '5884',
    '5885',
    '5886',
    '5887',
    '5888',
    '5889',
    '5890',
    '5871',
    '5872',
    '0593',
    '0594',
    '3471',
    '3472',
    '3473',
    '4075',
    '3995',
    '0583',
    '0587',
    '0588',
    '0589',
    '2474',
    '4376',
    '3371',
    '3372',
    '3373',
    '3374',
    '3375',
    '3079',
    '4181',
    '4182',
    '4183',
    '4184',
    '4186',
    '0772',
    '4371',
    '4372',
    '4373',
    '4374',
    '4381',
    '3793',
    '3794',
    '3597',
    '4974',
    '4198',
    '4691',
    '3881',
    '3882',
    '3883',
    '3784',
    '3980',
    '0475',
    '0476',
    '0192',
    '4278',
    '4279',
    '3997',
    '3885',
    '3886',
    '3197',
    '3198',
    '3199',
    '4681',
    '4682',
    '4684',
    '4685',
    '5581',
    '5582',
    '5583',
    '4276',
    '4277',
    '3972',
    '3973',
    '3974',
    '3975',
    '3976',
    '3977',
    '3989',
    '3990',
    '3671',
    '3672',
    '3673',
    '3674',
    '4981',
    '4982',
    '4983',
    '4984',
    '4985',
    '4986',
    '4987',
    '4988',
    '4989',
    '4471',
    '4472',
    '4473',
    '4474',
    '4475',
    '4476',
    '4477',
    '4478',
    '4479',
    '4470',
    '4481',
    '2580',
    '2582',
    '2583',
    '2584',
    '2585',
    '0571',
    '4597',
    '4598',
    '3971',
    '3970',
    '2471',
    '2472',
    '2473',
    '4990',
    '4991',
    '4992',
    '4291',
    '4292',
    '4293',
    '5381',
    '3880',
    '2676',
    '2677',
    '2678',
    '2679',
    '3481',
    '3482',
    '3483',
    '4694',
    '4696',
    '3295',
    '3296',
    '3297',
    '4189',
    '3081',
    '3083',
    '4780',
    '3077',
    '3072',
    '3073',
    '3074',
    '3076',
    '3096',
    '3097',
    '4081',
    '4082',
    '4083',
    '0591',
    '0592',
    '0272',
    '0994',
    '0992',
    '0993',
    '4391',
    '4392',
    '4393',
    '4394',
    '4395',
    '4396',
    '4397',
    '4791',
    '4792',
    '4793',
    '4794',
    '4795',
    '4796',
    '4286',
    '4287',
    '4288',
    '0381',
    '3991',
    '3992',
    '3993',
    '3994',
    '3996',
    '3791',
    '3792',
    '3377',
    '3378',
    '3379',
    '3384',
    '3385',
    '3171',
    '3172',
    '3173',
    '3174',
    '3175',
    '3176',
    '3179',
    '3180',
    '3391',
    '3392',
    '3393',
    '3879',
    '3872',
    '3873',
    '3874',
    '3875',
    '3876',
    '3877',
    '3878',
    '4091',
    '4092',
    '4093',
    '4094',
    '3781',
    '3782',
    '0391',
    '3981',
    '3982',
    '3983',
    '3985',
    '3986',
    '3987',
    '3988',
    '3894',
    '3895',
    '3182',
    '3183',
    '3186',
    '3187',
    '3188',
    '3189',
    '3578',
    '3577',
    '3574',
    '3575',
    '3576',
    '4087',
    '4086',
    '5894',
    '3484',
    '3485',
    '4079',
    '3491',
    '4077',
    '2696',
    '2697',
    '2693',
    '2694',
    '2695',
    '3381',
    '3382',
    '5371',
    '5372',
    '4377',
    '4375',
    '4379',
    '4378',
    '3474',
    '1971',
    '3681',
    '3682',
    '5391',
    '3196',
    '0881',
    '0882',
    '0883',
    '3998',
    '5373',
    '0193',
    '4271',
    '4272',
    '4273',
    '4274',
    '4275',
    '0582',
    '4281',
    '4282',
    '4283',
    '4284',
    '4285',
    '4191',
    '4197',
    '4193',
    '4195',
    '4196',
    '4382',
    '4383',
    '3380',
    '2681',
    '2682',
    '2683',
    '2684',
    '3475',
    '4571',
    '4572',
    '4573',
    '4574',
    '4575',
    '4576',
    '4577',
    '4578',
    '4581',
    '4582',
    '4584',
    '4585',
    '4586',
    '4587',
    '4588',
    '0981',
    '0982',
    '0983',
    '0984',
    '0985',
    '0986',
    '4591',
    '4592',
    '0972',
    '0973',
    '0974',
    '0975',
    '0977',
    '3191',
    '3192',
    '3193',
    '3194',
    '3691',
    '0171',
    '0172',
    '0173',
    '0174',
    '0175',
    '0176',
    '0178',
    '0179',
    '0170',
    '3591',
    '3592',
    '4997',
    '4998',
    '4999',
  ],
  southIslandRural: [
    '7581',
    '7582',
    '7583',
    '9391',
    '9392',
    '9393',
    '7481',
    '7482',
    '7483',
    '7771',
    '7772',
    '7773',
    '7774',
    '7775',
    '7776',
    '7777',
    '7778',
    '9271',
    '9272',
    '9273',
    '9274',
    '9779',
    '7670',
    '7871',
    '7271',
    '7272',
    '7273',
    '7274',
    '7275',
    '7276',
    '9091',
    '7091',
    '7984',
    '7381',
    '7382',
    '7383',
    '7384',
    '7671',
    '7672',
    '7674',
    '7675',
    '7676',
    '7677',
    '7678',
    '9583',
    '9584',
    '7673',
    '7073',
    '9384',
    '9383',
    '7391',
    '7392',
    '7571',
    '7572',
    '9791',
    '7872',
    '9076',
    '9077',
    '7987',
    '7193',
    '7991',
    '7992',
    '9372',
    '9771',
    '9772',
    '9773',
    '9774',
    '9775',
    '9776',
    '9777',
    '7387',
    '7884',
    '7178',
    '7385',
    '7881',
    '7882',
    '7883',
    '9871',
    '9872',
    '9874',
    '9875',
    '9876',
    '9879',
    '9877',
    '7691',
    '7692',
    '7371',
    '7374',
    '7373',
    '9281',
    '9282',
    '7893',
    '7875',
    '9498',
    '9591',
    '9593',
    '7682',
    '7683',
    '7591',
    '9792',
    '9793',
    '9794',
    '8971',
    '5781',
    '5782',
    '5783',
    '5784',
    '7791',
    '9596',
    '9597',
    '9598',
    '9291',
    '9292',
    '9092',
    '7196',
    '7197',
    '7198',
    '7077',
    '7071',
    '7072',
    '9491',
    '9492',
    '9494',
    '9495',
    '9493',
    '9376',
    '9377',
    '9689',
    '9682',
    '9683',
    '9386',
    '9387',
    '9073',
    '9074',
    '9585',
    '9586',
    '7495',
    '9481',
    '9482',
    '9483',
    '7990',
    '7281',
    '7282',
    '7284',
    '7982',
    '7983',
    '9081',
    '9082',
    '9371',
    '7194',
    '7192',
    '7195',
    '7781',
    '7782',
    '7783',
    '7784',
    '9395',
    '9396',
    '9397',
    '9398',
    '7471',
    '7472',
    '7473',
    '7475',
    '7476',
    '7477',
    '7895',
    '7081',
    '9881',
    '9883',
    '7885',
    '7379',
    '9571',
    '9572',
    '7873',
    '7285',
    '7580',
    '7681',
    '7988',
    '7183',
    '7182',
    '9587',
    '9679',
    '9672',
    '7985',
    '7986',
    '7971',
    '7972',
    '7973',
    '7974',
    '7975',
    '9884',
    '9691',
    '7173',
    '7175',
    '7395',
    '9778',
    '7491',
    '9471',
    '9472',
    '7977',
    '7978',
    '7979',
    '7980',
    '9085',
    '7095',
    '7096',
    '9382',
    '7891',
    '7892',
    '7886',
    '9781',
    '9782',
    '9783',
    '9891',
    '9892',
    '9893',
  ],
  northland: [
    '0112',
    '0110',
    '0230',
    '0420',
    '0505',
    '0118',
    '0210',
    '0114',
    '0410',
    '0200',
    '0510',
    '0204',
    '0520',
    '0202',
    '0116',
    '0310',
    '0405',
    '0530',
    '0211',
  ],
  auckland: [
    '2016',
    '2102',
    '1010',
    '0626',
    '0610',
    '0624',
    '1050',
    '2120',
    '2025',
    '2014',
    '2103',
    '0620',
    '2010',
    '1023',
    '632',
    '2105',
    '1071',
    '2024',
    '1072',
    '2013',
    '0810',
    '1021',
    '0600',
    '1051',
    '0602',
    '0630',
    '2112',
    '0614',
    '1041',
    '0930',
    '2012',
    '0612',
    '1061',
    '2104',
    '0932',
    '0629',
    '2022',
    '0618',
    '0830',
    '1052',
    '1024',
    '0627',
    '0622',
    '1025',
    '1081',
    '1060',
    '1042',
    '2018',
    '1011',
    '0910',
    '1062',
    '2110',
    '0820',
    '1022',
    '0920',
    '2113',
    '2023',
    '1026',
    '0931',
    '2123',
    '0812',
    '0800',
    '0604',
    '0900',
    '0814',
    '2122',
  ],
  waikato: [
    '3330',
    '3210',
    '3200',
    '3420',
    '3204',
    '3500',
    '3800',
    '3206',
    '3510',
    '3434',
    '3300',
    '3214',
    '3610',
    '3432',
    '3720',
    '3508',
    '3910',
    '3600',
    '3216',
    '3506',
    '3700',
    '3900',
    '3411',
    '3400',
    '3710',
    '3503',
    '3334',
    '3415',
    '2121',
    '3912',
    '3320',
    '3802',
    '3225',
    '3410',
    '3310',
    '3218',
    '3401',
    '3803',
    '3421',
    '3721',
    '3332',
  ],
  gisborneHawkesBay: [
    '4210',
    '4010',
    '4108',
    '4200',
    '4122',
    '4112',
    '4110',
    '4120',
    '4130',
    '4102',
    '4032',
    '4104',
    '4022',
    '4202',
    '4203',
  ],
  bayOfPlenty: [
    '3110',
    '3116',
    '3112',
    '3120',
    '3015',
    '3118',
    '3010',
    '3122',
    '3129',
    '3119',
    '3123',
    '3611',
    '3121',
    '3020',
    '3127',
    '3114',
    '3025',
  ],
  taranakiManawatuWhanganui: [
    '4820',
    '4501',
    '4410',
    '4412',
    '4414',
    '4312',
    '4702',
    '5510',
    '4720',
    '4332',
    '4610',
    '4817',
    '4500',
    '4821',
    '4930',
    '4920',
    '4310',
    '4710',
    '4320',
    '4818',
    '4520',
    '4900',
    '4910',
    '4632',
    '4616',
    '4625',
    '4815',
    '4826',
    '4822',
    '4314',
    '4614',
    '4814',
    '4810',
    '4322',
    '4510',
    '4330',
    '3920',
    '4730',
    '4335',
    '4816',
    '4612',
    '3926',
    '3924',
    '4825',
  ],
  wellington: [
    '5032',
    '5024',
    '6035',
    '6011',
    '6037',
    '5010',
    '5026',
    '5028',
    '6021',
    '6023',
    '5012',
    '5036',
    '5018',
    '6022',
    '5011',
    '5512',
    '5022',
    '5019',
    '5810',
    '6012',
    '5713',
    '5034',
    '5014',
    '5712',
    '5711',
    '5710',
    '5013',
    '5016',
  ],
  nelsonMarlboroughTasman: [
    '7110',
    '7202',
    '7010',
    '7120',
    '7201',
    '7220',
    '7204',
    '7020',
    '7011',
    '7025',
    '7005',
    '7100',
    '7210',
    '7022',
    '7007',
    '7206',
  ],
  canterburyWestCoast: [
    '7805',
    '7825',
    '8014',
    '8013',
    '7912',
    '8042',
    '7604',
    '8083',
    '8053',
    '8041',
    '7400',
    '7334',
    '7630',
    '8061',
    '7332',
    '8023',
    '8011',
    '7903',
    '7700',
    '8025',
    '7300',
    '8051',
    '7810',
    '7910',
    '8022',
    '8024',
    '8062',
    '7920',
    '7730',
    '7420',
    '7924',
    '7925',
    '7608',
    '7402',
    '7614',
    '8052',
    '7410',
    '7803',
    '7830',
    '8081',
    '7610',
    '7520',
    '7802',
    '7510',
    '9435',
    '7812',
    '7823',
    '7930',
    '7632',
    '7430',
    '8082',
    '7901',
    '7822',
    '7710',
    '7602',
    '7804',
    '7310',
    '9412',
    '7600',
    '7811',
    '7832',
    '7500',
    '7616',
  ],
  otago: [
    '9010',
    '9810',
    '9018',
    '9500',
    '9220',
    '9012',
    '9510',
    '9011',
    '9024',
    '9304',
    '9600',
    '9310',
    '9305',
    '9016',
    '9302',
    '9022',
    '9300',
    '9710',
    '9532',
    '9816',
    '9401',
    '9720',
    '9210',
    '9023',
    '9822',
    '9400',
    '9812',
    '9330',
    '9013',
    '9712',
    '9610',
    '9014',
    '9019',
    '9831',
    '9231',
    '9230',
    '9814',
    '9630',
    '9534',
    '9410',
    '9320',
    '9430',
    '9730',
    '9522',
    '9035',
    '9535',
    '9620',
    '9635',
    '9825',
    '9332',
  ],
};
