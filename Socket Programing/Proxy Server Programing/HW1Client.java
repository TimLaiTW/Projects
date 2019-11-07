// These codes could work with "GET www.google.com/index.html" 
import java.io.*;
import java.net.*;
import java.lang.Math;

public class HW1Client {
    public static void main(String[] args) throws IOException {

        if (args.length != 2) {
            System.err.println(
                "Usage: java HW1Client <host name> <port number>");
            System.exit(1);
        }

        String hostName = args[0];
        int portNumber = Integer.parseInt(args[1]);

        try (
        	Socket clientSocket = new Socket(hostName, portNumber);
            PrintWriter out =
                new PrintWriter(clientSocket.getOutputStream(), true);
            BufferedReader in =
                new BufferedReader(
                    new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter outputFile = new PrintWriter("index.html");
        ){
			String userInput, userOutput;
            double completeFileSize = 0;
            double downloadedFileSize = 0;
			BufferedReader stdIn = new BufferedReader(
				new InputStreamReader(System.in));

            char[] animationChars = new char[] {'|', '/', '-', '\\'};
            
            while ((userInput = stdIn.readLine()) != null) {
                out.println(userInput);
                System.out.println("Sending request...");
                // if(fileSize.exists()){
                //     completeFileSize = outputFile.length();
                // }
                int i = 0;
                while((userOutput = in.readLine()) != null){
                    if (userOutput.length() > 0) {
                        outputFile.println(userOutput);
                    }

                    System.out.print("Processing: " + animationChars[i % 4] + '\r');
                    i++;

                    // downloadedFileSize += userOutput.length();
                    // percentage = downloadedFileSize + "/" + completeFileSize;
                    // if(percentage < 20)
                    //     {System.out.println("|          |\r");}
                    // else if(percentage < 40)
                    //     {System.out.println("|==        |\r");}
                    // else if(percentage < 60)
                    //     {System.out.println("|====      |\r");}
                    // else if(percentage < 80)
                    //     {System.out.println("|======    |\r");}
                    // else if(percentage < 100)
                    //     {System.out.println("|========  |\r");}
                    // else
                    //     {System.out.println("|==========|\r");}
                }
                out.flush();
            }
            clientSocket.close();
            out.close();
            in.close();
            outputFile.close();
			stdIn.close();
        } catch (UnknownHostException e) {
            System.err.println("Don't know about host " + hostName);
            System.exit(1);
        } catch (IOException e) {
            System.err.println("Couldn't get I/O for the connection to " +
                hostName);
            System.exit(1);
        } 
    }
}