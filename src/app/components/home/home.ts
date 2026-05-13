import { Component } from '@angular/core';
import { Login } from '../login/login';
import { About } from '../about/about';
import { Animatedbg } from '../animatedbg/animatedbg';
import { Supabase } from '../../services/supabase/supabase';

@Component({
  selector: 'app-home',
  imports: [Animatedbg],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private sb: Supabase) { }
  ngOnInit(): void { }

}

