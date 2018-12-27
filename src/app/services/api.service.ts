import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user';
import { Idea, IdeaDTO } from '@app/models/idea';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = environment.api_server + '/api';

  constructor(private http: HttpClient, private auth: AuthService) { }

  private request(method: string, endpoint: string, body?: any): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this.http.request(method, url, {
      body,
      headers: { authorization: `Bearer ${this.auth.token}` }
    });
  }

  getUsers(page?: number): Observable<User[]> {
    const endpoint = page ? `users?page=${page}` : 'users';
    return this.request('GET', endpoint);
  }

  getUser(username: string): Observable<User> {
    const endpoint = `users/${username}`;
    return this.request('GET', endpoint);
  }

  getIdeas(page?: number): Observable<Idea[]> {
    const endpoint = page ? `ideas?page=${page}` : 'ideas';
    return this.request('GET', endpoint);
  }

  getNewestIdeas(page?: number): Observable<Idea[]> {
    const endpoint = page ? `ideas/newest?page=${page}` : 'ideas/newest';
    return this.request('GET', endpoint);
  }

  getIdea(id: string) {
    const endpoint = `ideas/${id}`;
    return this.request('GET', endpoint);
  }

  createIdea(id: string, data: IdeaDTO): Observable<Idea> {
    const endpoint = `ideas/${id}`;
    return this.request('POST', endpoint, data);
  }

  updateIdea(id: string, data: Partial<IdeaDTO>): Observable<Idea> {
    const endpoint = `ideas/${id}`;
    return this.request('PUT', endpoint, data);
  }

  deleteIdea(id: string): Observable<Idea> {
    const endpoint = `ideas/${id}`;
    return this.request('DELETE', endpoint);
  }

  upvoteIdea(id: string): Observable<Idea> {
    const endpoint = `ideas/${id}/upvote`;
    return this.request('POST', endpoint);
  }

  downvoteIdea(id: string): Observable<Idea> {
    const endpoint = `ideas/${id}/downvote`;
    return this.request('POST', endpoint);
  }

  bookmarkIdea(id: string): Observable<User> {
    const endpoint = `ideas/${id}/bookmark`;
    return this.request('POST', endpoint);
  }

  unbookmarkIdea(id: string): Observable<User> {
    const endpoint = `ideas/${id}/bookmark`;
    return this.request('DELETE', endpoint);
  }

  getCommentsByIdea(idea: string, page?: string): Observable<Comment[]> {
    const endpoint = page ? `comments/idea/${idea}?page=${page}` : `comments/idea/${idea}`;
    return this.request('GET', endpoint);
  }

  getCommentsByUser(user: string, page?: string): Observable<Comment[]> {
    const endpoint = page ? `comments/user/${user}?page=${page}` : `comments/user/${user}`;
    return this.request('GET', endpoint);
  }

  getComment(id: string): Observable<Comment> {
    const endpoint = `comments/${id}`;
    return this.request('GET', endpoint);
  }

  createComment(idea: string, data): Observable<Comment> {
    const endpoint = `comments/idea/${idea}`;
    return this.request('GET', endpoint, data);
  }

  deleteComment(id: string, data): Observable<Comment> {
    const endpoint = `comments/${id}`;
    return this.request('DELETE', endpoint);
  }






}
