window.EtherBlue = {
    init: function() {
        if (document.getElementById("etherBlueUI")) return;

        let etherUI = document.createElement("div");
        etherUI.id = "etherBlueUI";
        etherUI.style = `
            position: fixed;
            top: 10vh;
            left: 50%;
            transform: translateX(-50%);
            width: 90vw;
            max-width: 350px;
            background: #0b0f19;
            border: 2px solid #1e3a8a;
            color: white;
            font-family: Arial, sans-serif;
            padding: 15px;
            border-radius: 8px;
            z-index: 2147483647;
            text-align: center;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
            user-select: none;
        `;

        let title = document.createElement("div");
        title.innerText = "Ether Blue";
        title.style = `
            font-size: 18px;
            font-weight: bold;
            background-image: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: rainbow 3s linear infinite;
        `;
        etherUI.appendChild(title);

        let input = document.createElement("textarea");
        input.style = `
            width: 100%;
            height: 80px;
            background: #101828;
            color: white;
            border: 1px solid #1e3a8a;
            padding: 8px;
            margin-top: 10px;
            resize: none;
            border-radius: 4px;
            font-size: 14px;
        `;
        input.placeholder = "Enter JavaScript here...";
        etherUI.appendChild(input);

        let runBtn = document.createElement("button");
        runBtn.innerText = "Run";
        runBtn.style = `
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 10px;
            margin-top: 10px;
            width: 100%;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
        `;
        runBtn.onclick = function() {
            try {
                let newScript = document.createElement("script");
                newScript.textContent = input.value;
                document.documentElement.appendChild(newScript);
                document.documentElement.removeChild(newScript);
            } catch (error) {
                alert("Error: " + error.message);
            }
        };
        etherUI.appendChild(runBtn);

        let closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.style = `
            position: fixed;
            bottom: 15px;
            right: 15px;
            background: red;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
            z-index: 2147483647;
        `;
        closeBtn.onclick = function() {
            document.body.removeChild(etherUI);
        };

        document.body.appendChild(etherUI);
        document.body.appendChild(closeBtn);
    }
};
