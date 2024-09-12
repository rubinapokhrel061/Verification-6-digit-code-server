exports.verify = async (req, res) => {
  try {
    const { code } = req.body;

    // Convert code to a string to perform validation
    const codeStr = code.toString();

    // Check if 'code' is exactly 6 digits long
    if (!/^\d{6}$/.test(codeStr)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid 6-digit code." });
    }

    // Check if the last digit is 7
    if (codeStr[5] === "7") {
      return res.status(400).json({ message: "The last digit can not be 7." });
    }

    // If all checks pass, return success
    return res.status(200).json({ message: "Verify Success" });
  } catch (error) {
    // Catch any unexpected errors and return a 500 status code
    console.error("Unexpected error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
