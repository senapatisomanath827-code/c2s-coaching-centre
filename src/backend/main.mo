import List "mo:core/List";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  module Submission {
    public func compare(a : Submission, b : Submission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let submissions = List.empty<Submission>();
  let admins = Map.empty<Principal, ()>();

  public shared ({ caller }) func addAdmin(admin : Principal) : async () {
    if (caller.toText() != "7hr7b-ciaaa-aaaam-adahq-cai") {
      Runtime.trap("Only owner can add admins");
    };
    admins.add(admin, ());
  };

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, message : Text, timestamp : Int) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    submissions.add(submission);
  };

  public shared ({ caller }) func getAllSubmissions() : async [Submission] {
    if (not admins.containsKey(caller)) {
      Runtime.trap("Access denied");
    };
    submissions.toArray().sort();
  };
};
