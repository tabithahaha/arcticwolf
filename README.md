# Take Home Test from Arctic Wolf Networks

Publisher produces messages at a rate of 20 per second. The messages are randomly chosen integers between -100 and 100.

Subscriber 1 computes and outputs sums of the integers that it receives in 5 second windows.

Subscriber 2 computes and outputs median of the integers that it receives in 5 second windows.

## Usage

Make sure you have Redis installed and running (see https://redis.io/topics/quickstart for details)

Open 3 terminals at each directory `pub/`, `sub1/` and `sub2/`

Install Dependencies in all of them

```sh
$ npm install
```

Run Server (suggest to run `sub1/` and `sub2/` first before running `pub/`)

```sh
$ npm start
```

Enter Ctrl-C to stop.
