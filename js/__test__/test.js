// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../")

const { encrypt, decrypt } = require(path + "lib.js")

eye.test("Encryption", "node",
	$ => $(encrypt("hello", 13)).length(5),
	$ => $(encrypt("hello", 13)).Equal("ghjso")
)
eye.test("Decryption", "node",
	$ => $(decrypt("ghjso", 13)).Equal("hello"),
	$ => $(decrypt(encrypt("hello", 18), 18)).Equal("hello")
)
