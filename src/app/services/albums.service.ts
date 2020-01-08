import { Injectable } from "@angular/core";
import { Album } from "../interfaces/album";

@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  albums: Album[] = [
    {
      front: "/assets/images/horses-front.jpg",
      back: "/assets/images/horses-back.jpg",
      tracklisting: [
        "Gloria",
        "Redondo Beach",
        "Birdland",
        "Free Money",
        "Kimberly",
        "Break it Up",
        "Land",
        "Elegie"
      ]
    },
    {
      front: "/assets/images/ramones-front.jpg",
      back: "/assets/images/ramones-back.jpg",
      tracklisting: [
        "Blitzkrieg Bop",
        "Beat on the Brat",
        "Judy Is a Punk",
        "I Wanna Be Your Boyfriend",
        "Chain Saw",
        "Now I Wanna Sniff Some Glue",
        "I Don't Wanna Go Down to the Basement",
        "Loudmouth",
        "Havana Affair",
        "Listen to My Heart",
        "53rd & 3rd",
        "Let's Dance",
        "I Don't Wanna Walk Around With You",
        "Today Your Love, Tomorrow the World"
      ]
    },
    {
      front: "/assets/images/77-front.jpg",
      back: "/assets/images/77-back.jpg",
      tracklisting: [
        "Uh-Oh, Love Comes to Town",
        "New Feeling",
        "Tentative Decisions",
        "Happy Day",
        "Who Is It?",
        "No Compassion",
        "The Book I Read",
        "Don't Worry About the Government",
        "First Week/Last Week… Carefree",
        "Psycho Killer",
        "Pulled Up"
      ]
    },
    {
      front: "/assets/images/devo-front.jpg",
      back: "/assets/images/devo-back.jpg",
      tracklisting: [
        "Uncontrollable Urge",
        "(I Can't Get No) Satisfaction",
        "Praying Hands",
        "Space Junk",
        "Mongoloid",
        "Jocko Homo",
        "Too Much Paranoias",
        "Gut Feeling / (Slap Your Mammy)",
        "Come Back Jonee",
        "Sloppy (I Saw My Baby Gettin')",
        "Shrivel-Up"
      ]
    },
    {
      front: "/assets/images/drums-front.jpg",
      back: "/assets/images/drums-back.jpg",
      tracklisting: [
        "Making Plans for Nigel",
        "Helicopter",
        "Day In Day Out",
        "When You're Near Me I Have Difficulty",
        "Ten Feet Tall",
        "Roads Girdle the Globe",
        "Real by Reel",
        "Millions",
        "That Is the Way",
        "Outside World",
        "Scissor Man",
        "Complicated Game"
      ]
    },
    {
      front: "/assets/images/wipers-front.jpg",
      back: "/assets/images/wipers-back.jpg",
      tracklisting: [
        "Return of the Rat",
        "Mystery",
        "Up Front",
        "Let's Go Away",
        "Is This Real?",
        "Tragedy",
        "Alien Boy",
        "D-7",
        "Potential Suicide",
        "Don't Know What I Am",
        "Window Shop for Love",
        "Wait a Minute"
      ]
    }
  ];

  getAlbums(): Album[] {
    return this.albums;
  }

  constructor() {}
}
