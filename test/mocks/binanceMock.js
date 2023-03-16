export const binanceMock = {
  candlesticks: jasmine.createSpy('candlesticks').and.callFake((symbol, period, callback, params) => {
    const ticks = [[1615881600000, "52.81600000", "52.86500000", "52.79900000", "52.85300000", "3264.33500000", 1615885199999, "172094.98609000", 96]
    ];
    callback(null, ticks);
  })
};