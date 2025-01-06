export const field_events = ['HJ', 'PV', 'LJ', 'TJ', 'SP', 'DT', 'HT', 'JT', 'Decathlon', 'Heptathlon', 'Pentathlon'];
export const thons = ['Decathlon', 'Heptathlon', 'Pentathlon'];
export const SPECIAL_EVENTS = ['5000m', '3000mSC'];

export const COMPETITION_POINTS = {
    'OW': { // Olympic/World Championships
        1: 375, 2: 330, 3: 300, 4: 270, 5: 250, 6: 230, 7: 215, 8: 200,
        9: 130, 10: 120, 11: 110, 12: 100, 13: 95, 14: 90, 15: 85, 16: 80
    },
    'DF': { // Diamond Final
        1: 240, 2: 210, 3: 185, 4: 170, 5: 155, 6: 145, 7: 135, 8: 125,
        9: 90, 10: 80, 11: 70, 12: 60
    },
    'GW': { // Diamond League
        1: 200, 2: 170, 3: 150, 4: 140, 5: 130, 6: 120, 7: 110, 8: 100,
        9: 70, 10: 60, 11: 50, 12: 45
    },
    'GL': { // Continental Gold
        1: 170, 2: 145, 3: 130, 4: 120, 5: 110, 6: 100, 7: 90, 8: 80,
        9: 60, 10: 50, 11: 45, 12: 40
    },
    'A': { // Category A
        1: 140, 2: 120, 3: 110, 4: 100, 5: 90, 6: 80, 7: 70, 8: 60
    },
    'B': { // Category B
        1: 100, 2: 80, 3: 70, 4: 60, 5: 55, 6: 50, 7: 45, 8: 40
    },
    'C': { // Category C
        1: 60, 2: 50, 3: 45, 4: 40, 5: 35, 6: 30, 7: 27, 8: 25
    },
    'D': { // Category D
        1: 40, 2: 35, 3: 30, 4: 25, 5: 22, 6: 19, 7: 17, 8: 15
    },
    'E': { // Category E
        1: 25, 2: 21, 3: 18, 4: 15, 5: 12, 6: 10
    },
    'F': { // Category F
        1: 15, 2: 10, 3: 5
    }
}

export const SPECIAL_EVENTS_POINTS = {
    OW: {
        1: 305, 2: 270, 3: 240, 4: 220, 5: 200, 6: 185, 7: 175, 8: 165,
        9: 110, 10: 100, 11: 90, 12: 80, 13: 75, 14: 70, 15: 65, 16: 60
    },
    DF: {
        1: 210, 2: 185, 3: 160, 4: 145, 5: 130, 6: 120, 7: 110, 8: 100,
        9: 70, 10: 60, 11: 55, 12: 50
    },
    GW: {
        1: 180, 2: 160, 3: 140, 4: 120, 5: 110, 6: 100, 7: 90, 8: 80,
        9: 55, 10: 45, 11: 40, 12: 35
    },
    GL: {
        1: 150, 2: 135, 3: 120, 4: 105, 5: 90, 6: 80, 7: 70, 8: 60,
        9: 45, 10: 40, 11: 35, 12: 30
    },
    A: {
        1: 100, 2: 90, 3: 80, 4: 70, 5: 60, 6: 50, 7: 45, 8: 40
    },
    B: {
        1: 70, 2: 60, 3: 50, 4: 45, 5: 40, 6: 35, 7: 30, 8: 25
    },
    C: {
        1: 50, 2: 40, 3: 35, 4: 30, 5: 26, 6: 23, 7: 20, 8: 18
    },
    D: {
        1: 35, 2: 27, 3: 22, 4: 19, 5: 16, 6: 14, 7: 12, 8: 10
    },
    E: {
        1: 20, 2: 16, 3: 12, 4: 10, 5: 9, 6: 8
    },
    F: {
        1: 12, 2: 7, 3: 4
    }
};



export const coeffs = {
    'mens' : {
        'outdoor': {
            '100m': {'a': 22.72906633363137, 'b': 17.073559322033887, 'c': 2.0303898521671435},
            '200m': {'a': 5.149109281541434, 'b': 35.470909090909075, 'c': 1.996413499316843},
            '300m': {'a': 1.857078536461313, 'b': 57.158181818181866, 'c': 1.996413499316848},
            '400m': {'a': 1.0189019287307088, 'b': 78.99625850340155, 'c': 2.000526780477403},
            '500m': {'a': 0.590148761810476, 'b': 103.96809768637517, 'c': 1.9979678954052702},
            '110mH': {'a': 7.937642625847985, 'b': 25.75120370370371, 'c': 1.9887517586426298},
            '400mH': {'a': 0.5694488391505395, 'b': 95.3396039603959, 'c': 1.9907416508621754},
            '4x100m': {'a': 1.1855964698352564, 'b': 69.60857142857141, 'c': 2.010051627097967},
            '4x200m': {'a': 0.2989860214300753, 'b': 143.978899082569, 'c': 1.999041172632535},
            '4x400m': {'a': 0.050278191394837, 'b': 334.03988653555274, 'c': 2.0007465393640316},
            '600m': {'a': 0.3740561737086267, 'b': 129.6254297693921, 'c': 2.0064874029170836},
            '800m': {'a': 0.1987795058284999, 'b': 181.9703592814372, 'c': 1.9992719430334422},
            '1000m': {'a': 0.11247417150443936, 'b': 237.48847801578327, 'c': 1.99967841331642},
            '1500m': {'a': 0.040719119881219616, 'b': 384.98442333785613, 'c': 1.999738387776432},
            'Mile': {'a': 0.03531648044112377, 'b': 414.92337114051793, 'c': 1.9989602259468897},
            '2000m': {'a': 0.021782788397628004, 'b': 528.0070377733591, 'c': 2.000209585682385},
            '2000mSC': {'a': 0.010267470893475975, 'b': 659.9328819326299, 'c': 1.9994345577187678},
            '3000m': {'a': 0.008156709949972512, 'b': 839.9832837181051, 'c': 1.9998743012759241},
            '3000mSC': {'a': 0.006993315265662106, 'b': 1007.3157932948961, 'c': 1.9304926218966352},
            '2Miles': {'a': 0.007020253397003393, 'b': 904.8290547404072, 'c': 2.0002029090957367},
            '5000m': {'a': 0.002790825141811829, 'b': 1439.8439734042533, 'c': 1.9993589114213435},
            '10000m': {'a': 0.0005232995451990663, 'b': 3150.0875117479336, 'c': 2.0001668569965223},
            '5km': {'a': 0.0025943151653944055, 'b': 1441.2857142857142, 'c': 2.01005162709797},
            '10km': {'a': 0.0005444610900944085, 'b': 3146.607692307692, 'c': 1.995434280257242},
            '15km': {'a': 0.00021411339879220847, 'b': 4868.930693069307, 'c': 2.001139792783245},
            '10Miles': {'a': 0.00019398087342133706, 'b': 5245.16894977169, 'c': 1.994524358011752},
            '20km': {'a': 0.00010627295502532476, 'b': 6705.687719298246, 'c': 2.0023315574027687},
            'HalfMarathon': {'a': 8.711301721490519e-05, 'b': 7151.5921052631575, 'c': 2.0093936895701},
            '25km': {'a': 6.26195817142983e-05, 'b': 8723.211081794196, 'c': 1.998176844455701},
            '30km': {'a': 3.4781185289824266e-06, 'b': 11321.009456264776, 'c': 2.257552493644194},
            'Marathon': {'a': 1.618065774847371e-05, 'b': 16204.083333333334, 'c': 2.001717435565067},
            '100km': {'a': 1.768664428724596e-06, 'b': 48597.31515422441, 'c': 1.9998135516110527},
            'HJ': {'a': 829.821872434918, 'b': 0.9009774436090223, 'c': 1.0487229455786498},
            'PV': {'a': 230.64215569896194, 'b': 1.0706542056074773, 'c': 1.067247018548772},
            'LJ': {'a': 184.9759875770746, 'b': 2.4310370370370378, 'c': 1.0586471896690626},
            'TJ': {'a': 86.31247563118046, 'b': 5.35083333333333, 'c': 1.059977252960601},
            'SP': {'a': 55.70836447929119, 'b': 0.8771142284569147, 'c': 1.0173352950497625},
            'DT': {'a': 16.959580205965505, 'b': 1.282447595561027, 'c': 1.0155559827177543},
            'HT': {'a': 14.166404377927986, 'b': 1.1094640998959466, 'c': 1.0168778568342631},
            'JT': {'a': 13.005122514600481, 'b': 1.1790023866348465, 'c': 1.0165166288218594},
            'Decathlon': {'a': 0.08424817976681961, 'b': 235.49789029535864, 'c': 1.0607348311248574}
        },
        'indoor': {
            '50m': {'a': 93.64640114940705, 'b': 9.213960264900665, 'c': 2.0113762036416647},
            '55m': {'a': 78.33582198255517, 'b': 10.004682634730544, 'c': 2.0034641794504084},
            '60m': {'a': 69.02594660167637, 'b': 10.691184357541903, 'c': 1.9994358885347214},
            '50mH': {'a': 34.97342015892513, 'b': 12.327401960784329, 'c': 1.9914213012486488},
            '55mH': {'a': 29.42430069816715, 'b': 13.367962962962963, 'c': 2.008199643903326},
            '60mH': {'a': 24.036713605411215, 'b': 14.593627257799668, 'c': 1.9974063758049092},
            '200m': {'a': 5.0753437085151765, 'b': 35.98416981132079, 'c': 1.9979746871523074},
            '300m': {'a': 1.7171906625581308, 'b': 58.11022727272727, 'c': 2.0123244694453186},
            '400m': {'a': 0.9504486260908366, 'b': 80.68943143812719, 'c': 2.0073758411773},
            '500m': {'a': 0.574381965451359, 'b': 105.93272727272739, 'c': 1.9964134993168532},
            '4x200m': {'a': 0.3059778962459741, 'b': 144.08651600753313, 'c': 2.0040247100411452},
            '4x400m': {'a': 0.04935314069705257, 'b': 339.9119033457246, 'c': 1.9983773687550135},
            '600m': {'a': 0.39030727099276374, 'b': 130.99531512605026, 'c': 1.999756349058236},
            '800m': {'a': 0.1950467084201986, 'b': 184.05528443113747, 'c': 2.002416136762837},
            '1000m': {'a': 0.11601288254307916, 'b': 239.86756235827613, 'c': 1.9965578278420293},
            '1500m': {'a': 0.041949388644938565, 'b': 386.0110413793104, 'c': 2.0001884676237234},
            'Mile': {'a': 0.036876714180382485, 'b': 415.0059857789251, 'c': 2.000095770623785},
            '2000m': {'a': 0.022645922111792217, 'b': 527.964542235711, 'c': 1.9996812080299866},
            '3000m': {'a': 0.008299044756659827, 'b': 840.0539330672406, 'c': 2.0004097979433872},
            '3000mSC': {'a': 0.006993315265662106, 'b': 1007.3157932948961, 'c': 1.9304926218966352},
            '2Miles': {'a': 0.007020253397003393, 'b': 904.8290547404072, 'c': 2.0002029090957367},
            '5000m': {'a': 0.002905458321734265, 'b': 1439.9321761188598, 'c': 1.9997406253883285},
            'HJ': {'a': 821.5431601990614, 'b': 0.8927909090909083, 'c': 1.058889028163484},
            'PV': {'a': 235.0366427029748, 'b': 1.0938029739776962, 'c': 1.058864754588131},
            'LJ': {'a': 183.84487221502997, 'b': 2.4233661971830998, 'c': 1.0608201896464982},
            'TJ': {'a': 86.31247563118046, 'b': 5.35083333333333, 'c': 1.059977252960601},
            'SP': {'a': 55.70836447929119, 'b': 0.8771142284569147, 'c': 1.0173352950497625},
            'Heptathlon': {'a': 0.11511662603411928, 'b': 162.99929378531073, 'c': 1.0604844493555996}
        }
    },
    'womens' : {
        'outdoor': {
            '100m': {'a': 9.67725591075975, 'b': 22.03021276595743, 'c': 2.007923813725529},
            '200m': {'a': 2.2846614170328117, 'b': 45.45969849246231, 'c': 1.9949741915907866},
            '300m': {'a': 0.7152495823311537, 'b': 76.92058988764046, 'c': 1.995161967625656},
            '400m': {'a': 0.33161123362899747, 'b': 110.0427095516568, 'c': 2.0020586148274915},
            '500m': {'a': 0.1844443904665035, 'b': 145.59246715328462, 'c': 2.0033356609346606},
            '100mH': {'a': 4.193552731806259, 'b': 29.902066666666688, 'c': 1.985380404203295},
            '400mH': {'a': 0.20926050024309442, 'b': 129.98153609831016, 'c': 1.9992977023180571},
            '4x100m': {'a': 0.39658721995762447, 'b': 97.9171698113208, 'c': 1.9962133452611237},
            '4x200m': {'a': 0.07867868591730333, 'b': 212.08020892687526, 'c': 2.0018836512480167},
            '4x400m': {'a': 0.015549135950598482, 'b': 480.06831299957884, 'c': 2.0007111150467405},
            '600m': {'a': 0.13015803701794598, 'b': 179.9343599033816, 'c': 1.9983352478704486},
            '800m': {'a': 0.06888006405685204, 'b': 249.9814033539274, 'c': 1.9998121704539318},
            '1000m': {'a': 0.03805564294665372, 'b': 330.03948026315715, 'c': 2.00064271330471},
            '1500m': {'a': 0.013382685499579222, 'b': 540.020190884301, 'c': 2.0001946747045394},
            'Mile': {'a': 0.011637378186818356, 'b': 580.0089538685065, 'c': 2.000170402938661},
            '2000m': {'a': 0.006770832756944595, 'b': 749.984342651536, 'c': 1.9998927253307184},
            '2000mSC': {'a': 0.0036333138870617695, 'b': 932.0113717532474, 'c': 2.0001073417932647},
            '3000m': {'a': 0.0025285615449555125, 'b': 1200.13571404342, 'c': 2.000569592608279},
            '3000mSC': {'a': 0.0013251780610535806, 'b': 1509.918193611556, 'c': 1.9997824499293242},
            '2Miles': {'a': 0.00215375747230725, 'b': 1296.3526602063148, 'c': 2.0002037118870692},
            '5000m': {'a': 0.0008086854885773584, 'b': 2099.944668579627, 'c': 1.999892669727764},
            '10000m': {'a': 0.00017118233499344496, 'b': 4500.010792532579, 'c': 2.0000117621997893},
            '5km': {'a': 0.0008741363296965649, 'b': 2094.8, 'c': 1.9900484026476446},
            '10km': {'a': 0.0001564062899092174, 'b': 4509.632743362832, 'c': 2.0104941313576865},
            '15km': {'a': 5.9005748042349284e-05, 'b': 7289.493506493506, 'c': 2.0009597475997465},
            '10Miles': {'a': 5.0893050678623104e-05, 'b': 7901.259523809524, 'c': 1.9983835656427225},
            '20km': {'a': 2.8903241778765395e-05, 'b': 10159.208791208792, 'c': 2.0023585516830984},
            'HalfMarathon': {'a': 2.5814876522344016e-05, 'b': 10798.452830188678, 'c': 2.000616641732087},
            '25km': {'a': 1.8373647590777927e-05, 'b': 12960.660944206009, 'c': 1.9984622634234712},
            '30km': {'a': 1.2073061811483489e-05, 'b': 15789.118063754428, 'c': 2.0017863160054543},
            'Marathon': {'a': 6.0174038751304794e-06, 'b': 22794.554552912225, 'c': 1.998893635794069},
            '100km': {'a': 8.631741281290948e-07, 'b': 61214.27321372364, 'c': 2.001111428746047},
            'HJ': {'a': 903.2530604589032, 'b': 0.6769491525423718, 'c': 1.0731588514783947},
            'PV': {'a': 270.99832699413747, 'b': 0.6890476190476182, 'c': 1.0571269721300816},
            'LJ': {'a': 185.19864261916953, 'b': 1.1100936329588023, 'c': 1.0619945394160302},
            'TJ': {'a': 83.56131085043039, 'b': 2.3815679442508744, 'c': 1.057683167286288},
            'SP': {'a': 58.77479329924527, 'b': 0.3579079497907935, 'c': 1.0150820471613573},
            'DT': {'a': 16.965993004378962, 'b': 0.8219851576994459, 'c': 1.016049609972921},
            'HT': {'a': 14.873629577877542, 'b': 1.1713279132791268, 'c': 1.015629412368224},
            'JT': {'a': 17.021123041767343, 'b': 0.7814810205351658, 'c': 1.0165977298610076},
            'Heptathlon': {'a': 0.10914753506640078, 'b': 158.52045606975184, 'c': 1.060338517342441}
        },
        'indoor': {
            '50m': {'a': 32.74519480632212, 'b': 12.105455301415006, 'c': 2.00380952936879},
            '55m': {'a': 28.26761218524217, 'b': 13.127550105894858, 'c': 1.9923468945514715},
            '60m': {'a': 25.67269508559418, 'b': 13.9667934146749, 'c': 1.988971732043557},
            '50mH': {'a': 16.512002570747537, 'b': 15.27162162162164, 'c': 1.9938331039832204},
            '55mH': {'a': 12.386176713062236, 'b': 16.869999999999983, 'c': 2.021162820782169},
            '60mH': {'a': 11.278223225778298, 'b': 18.179691011235942, 'c': 1.9971286532184283},
            '200m': {'a': 2.017356227423132, 'b': 47.43723004694829, 'c': 1.9926781635256603},
            '300m': {'a': 0.6437555794369334, 'b': 79.07975342465767, 'c': 2.0053936980001343},
            '400m': {'a': 0.3267605060415733, 'b': 111.93215648854981, 'c': 1.9972637675966716},
            '500m': {'a': 0.17171837275701662, 'b': 150.48853760445695, 'c': 1.9996047592963668},
            '4x200m': {'a': 0.0834232455085668, 'b': 211.9233913043478, 'c': 1.9981661354833902},
            '4x400m': {'a': 0.015590895350023733, 'b': 483.9011725293132, 'c': 1.9990788290897006},
            '600m': {'a': 0.10709133380484782, 'b': 190.29017543859646, 'c': 1.9986467699390573},
            '800m': {'a': 0.057987734136377395, 'b': 263.8690434083603, 'c': 1.9975902811867765},
            '1000m': {'a': 0.035101142139035695, 'b': 340.2745676691724, 'c': 1.9982080957264372},
            '1500m': {'a': 0.013610321721658209, 'b': 540.04681871805, 'c': 2.0004556122853283},
            'Mile': {'a': 0.011580915868290005, 'b': 585.4298012287672, 'c': 1.999461332270076},
            '2000m': {'a': 0.006863227130131796, 'b': 752.1492509050396, 'c': 1.999719076574461},
            '3000m': {'a': 0.002581422498346999, 'b': 1200.108105515589, 'c': 2.00045825313547},
            '3000mSC': {'a': 0.007217410730512663, 'b': 906.9688599999994, 'c': 1.9998504820877663},
            '2Miles': {'a': 0.002202342096583106, 'b': 1296.2939333649147, 'c': 1.999976288075441},
            '5000m': {'a': 0.0008247697790882102, 'b': 2100.0054571815203, 'c': 2.0000369805027134},
            'HJ': {'a': 907.2139716207082, 'b': 0.6795873698354059, 'c': 1.0647813884234674},
            'PV': {'a': 268.0115285631054, 'b': 0.6747292131251992, 'c': 1.062360393967103},
            'LJ': {'a': 185.19864261916953, 'b': 1.1100936329588023, 'c': 1.0619945394160302},
            'TJ': {'a': 83.56131085043039, 'b': 2.3815679442508744, 'c': 1.057683167286288},
            'SP': {'a': 58.77479329924527, 'b': 0.3579079497907935, 'c': 1.0150820471613573},
            'Pentathlon': {'a': 0.15233296978089325, 'b': 111.42360475754803, 'c': 1.0599224951409776}
        }
    }
}
